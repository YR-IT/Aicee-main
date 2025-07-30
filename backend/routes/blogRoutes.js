import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// GET single blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    console.error('❌ Error fetching blog:', err);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// POST create blog
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    if (!data.title || !data.content || !data.image) {
      return res.status(400).json({ error: 'Title, content, and image are required' });
    }

    const newBlog = new Blog({
      title: data.title,
      content: data.content,
      excerpt: data.excerpt || data.content.slice(0, 150) + '...',
      author: data.author || 'Admin',
      image: data.image,
      category: data.category || 'General',
      readTime: data.readTime || `${Math.ceil(data.content.split(' ').length / 200)} min read`,
      views: 0,
      comments: 0,
      date: data.date || new Date()
    });

    await newBlog.save();
    res.status(201).json({ message: '✅ Blog created successfully', blog: newBlog });
  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// PUT update blog
router.put('/:id', async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json({ message: '✅ Blog updated successfully', blog: updated });
  } catch (err) {
    console.error('❌ Error updating blog:', err);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// DELETE blog
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json({ message: '🗑️ Blog deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting blog:', err);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

export default router;

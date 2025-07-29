import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

import Blog from '../models/Blog.js';


const router = express.Router();

// Multer in-memory config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Public: GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Public: GET blog by ID
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

// Admin: GET pending members
router.get('/pending-members', async (req, res) => {
  try {
    const pending = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.status(200).json(pending);
  } catch (err) {
    console.error('❌ Error fetching pending members:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Admin: POST approve member
router.post('/approve-member', async (req, res) => {
  const { id } = req.body;
  try {
    const member = await Member.findById(id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    member.status = 'approved';
    await member.save();
    res.json({ message: '✅ Member approved' });
  } catch (err) {
    console.error('❌ Error approving member:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Admin: POST create blog
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author, category, readTime } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    let imageUrl = '';

    if (req.file) {
      console.log('📤 Uploading image to Cloudinary...');
      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'blogs' },
          (error, result) => {
            if (error) {
              console.error('❌ Cloudinary upload error:', error);
              return reject(error);
            }
            console.log('✅ Uploaded to Cloudinary:', result.secure_url);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    }

    const newBlog = new Blog({
      title,
      content,
      excerpt: content.slice(0, 150) + '...',
      author: author || 'Admin',
      image: imageUrl,
      category: category || 'General',
      readTime: readTime || '2 min',
      views: 0
    });

    await newBlog.save();
    res.status(201).json({ message: '✅ Blog created successfully', blog: newBlog });

  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

export default router;

import Blog from '../models/Blog.js';
import Member from '../models/Member.js';

// ✅ GET /pending-members
export const getPendingMembers = async (req, res) => {
  try {
    const pendingMembers = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.status(200).json(pendingMembers);
  } catch (err) {
    console.error('❌ Error fetching pending members:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ POST /approve-member
export const approveMember = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).json({ error: 'Member ID is required' });

  try {
    const member = await Member.findById(id);
    if (!member) return res.status(404).json({ error: 'Member not found' });

    member.status = 'approved';
    await member.save();

    res.status(200).json({ message: '✅ Member approved successfully' });
  } catch (err) {
    console.error('❌ Error approving member:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ POST /blogs
export const createBlogPost = async (req, res) => {
  const { title, content, excerpt, image, author, category, readTime } = req.body;

  if (!title || !excerpt || !image || !content) {
    return res.status(400).json({ error: 'Title, excerpt, content, and image are required' });
  }

  try {
    const newBlog = new Blog({
      title,
      content,
      excerpt,
      image,
      author: author?.trim() || 'Admin',
      category: category?.trim() || 'General',
      readTime: readTime?.trim() || `${Math.ceil(content.split(' ').length / 200)} min read`,
      views: 0,
      comments: 0,
      date: new Date()
    });

    await newBlog.save();
    res.status(201).json({ message: '✅ Blog created successfully', blog: newBlog });
  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// ✅ GET /blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// ✅ GET /blogs/:id
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    console.error('❌ Error fetching blog:', err);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

// ✅ PUT /blogs/:id
export const updateBlogPost = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.status(200).json({ message: '✅ Blog updated successfully', blog });
  } catch (err) {
    console.error('❌ Error updating blog:', err);
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// ✅ DELETE /blogs/:id
export const deleteBlogPost = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.status(200).json({ message: '🗑️ Blog deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting blog:', err);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

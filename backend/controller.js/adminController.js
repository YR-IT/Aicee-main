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

// ✅ POST /blogs - expects image URL from Cloudinary
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
      readTime: readTime?.trim() || '2 min',
      views: 0,
    });

    await newBlog.save();
    res.status(201).json({ message: '✅ Blog created successfully', blog: newBlog });
  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

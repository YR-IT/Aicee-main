// server.js (CommonJS)

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Start log
console.log("🚀 server.js started");

const app = express();
const PORT = 5000;

// 1. Connect to MongoDB (DB: aicee)
mongoose.connect('mongodb://127.0.0.1:27017/aicee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB: aicee'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 2. Middleware
app.use(cors());
app.use(bodyParser.json());

// 3. Schema + Model
const memberSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: {
    type: String,
    unique: true,
  },
  address: String,
  city: String,
  country: String,
  zipCode: String,
  businessDescription: String,
  website: String,
  fax: String,
  status: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'memberdetails',
});

const Member = mongoose.model('Member', memberSchema);

// 4. Routes

// 🔹 Health check
app.get('/', (req, res) => {
  res.send('✅ Aicee Membership Backend is Running!');
});

// 🔹 Submit a new membership request
app.post('/members', async (req, res) => {
  try {
    console.log("📩 New Member Submission:", req.body);
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ success: true, message: 'Membership request submitted!' });
  } catch (err) {
    console.error("❌ Error saving member:", err);
    res.status(500).json({ error: 'Failed to submit member' });
  }
});

// 🔹 Fetch approved members
app.get('/members', async (req, res) => {
  try {
    const approved = await Member.find({ status: 'approved' });
    res.json(approved);
  } catch (err) {
    console.error("❌ Error fetching approved members:", err);
    res.status(500).json({ error: 'Failed to fetch approved members' });
  }
});

// 🔹 Fetch pending members
app.get('/pending-members', async (req, res) => {
  try {
    const pending = await Member.find({ status: 'pending' });
    res.json(pending);
  } catch (err) {
    console.error("❌ Error fetching pending members:", err);
    res.status(500).json({ error: 'Failed to fetch pending members' });
  }
});

// 🔹 Fetch a specific member by ID
app.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    console.error("❌ Error fetching member by ID:", err);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

// 🔹 Approve a member by ID
app.post('/approve-member', async (req, res) => {
  const { id } = req.body;
  try {
    const updated = await Member.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json({ success: true, message: 'Member approved!' });
  } catch (err) {
    console.error("❌ Error approving member:", err);
    res.status(500).json({ error: 'Failed to approve member' });
  }
});

// Add this to server.cjs under the Routes section
const blogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  image: String,
  date: { type: Date, default: Date.now },
  author: String,
  category: { type: String, default: 'business' },
  readTime: String,
  views: { type: Number, default: 0 }
}, {
  collection: 'blogs',
});

const Blog = mongoose.model('Blog', blogSchema);

// Add GET endpoint (as in previous response)
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Add POST endpoint
app.post('/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ success: true, message: 'Blog post created!' });
  } catch (err) {
    console.error("❌ Error creating blog:", err);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// 5. Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});



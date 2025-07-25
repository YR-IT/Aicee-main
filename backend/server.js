// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Start log
console.log("🚀 server.js started");

const app = express();
const PORT = 5000;

app.get("/api/members", async (req, res) => {
  try {
    const members = await Member.find(); // fetches all members from MongoDB
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 1. Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/membersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// 2. Middleware
app.use(cors());
app.use(bodyParser.json());

// 3. Schema + Model
const memberSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  phone: String,
  status: {
    type: String,
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Member = mongoose.model('Member', memberSchema);

// 4. Routes

// 🔹 Root route
app.get('/', (req, res) => {
  res.send('✅ Aicee Membership Backend is Running!');
});

// 🔹 Submit new member
app.post('/members', async (req, res) => {
  try {
    console.log("👉 Received POST /members request with data:", req.body);
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ success: true, message: 'Membership request submitted!' });
  } catch (err) {
    console.error("❌ Error submitting member:", err);
    res.status(500).json({ error: 'Failed to submit member' });
  }
});

// 🔹 Get approved members
app.get('/members', async (req, res) => {
  try {
    const approved = await Member.find({ status: 'approved' });
    res.json(approved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch approved members' });
  }
});

// 🔹 Get pending members
app.get('/pending-members', async (req, res) => {
  try {
    const pending = await Member.find({ status: 'pending' });
    res.json(pending);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pending members' });
  }
});

// 🔹 Approve a member
app.post('/approve-member', async (req, res) => {
  const { id } = req.body;
  try {
    const updated = await Member.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Member not found' });
    res.json({ success: true, message: 'Member approved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to approve member' });
  }
});

// 5. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

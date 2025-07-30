import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

router.get('/pending-members', async (req, res) => {
  try {
    const pending = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.status(200).json(pending);
  } catch (err) {
    console.error('❌ Error fetching pending members:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

export default router;

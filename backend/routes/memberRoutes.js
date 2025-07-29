import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

// GET /pending-members
router.get('/pending-members', async (req, res) => {
  const pending = await Member.find({ status: 'pending' });
  res.json(pending);
});

// POST /approve-member
router.post('/approve-member', async (req, res) => {
  const { id } = req.body;
  await Member.findByIdAndUpdate(id, { status: 'approved' });
  res.json({ success: true });
});

export default router;

// routes/memberRoutes.js
import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const members = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

export default router;

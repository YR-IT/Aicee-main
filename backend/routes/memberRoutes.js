// routes/memberRoutes.js
import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

// ✅ GET /api/members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// ✅ PATCH /api/members/:id/approve
router.patch('/members/:id/approve', async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    console.error('Error approving member:', error);
    res.status(500).json({ error: 'Failed to approve member' });
  }
});

// ✅ DELETE /api/members/:id/reject
router.delete('/members/:id/reject', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member rejected and deleted' });
  } catch (error) {
    console.error('Error rejecting member:', error);
    res.status(500).json({ error: 'Failed to reject member' });
  }
});

export default router;

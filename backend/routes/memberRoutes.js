import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

// ✅ Get pending members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    console.error('❌ Error fetching pending members:', error);
    res.status(500).json({ error: 'Failed to fetch pending members' });
  }
});

// ✅ Approve member
router.patch('/members/:id/approve', async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json({ message: 'Member approved', member });
  } catch (error) {
    console.error('❌ Error approving member:', error);
    res.status(500).json({ error: 'Failed to approve member' });
  }
});

// ✅ Reject member
router.delete('/members/:id/reject', async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json({ message: 'Member rejected and deleted' });
  } catch (error) {
    console.error('❌ Error rejecting member:', error);
    res.status(500).json({ error: 'Failed to reject member' });
  }
});

// ✅ Get all approved members (for frontend display)
router.get('/admin/members', async (req, res) => {
  try {
    const members = await Member.find({ status: 'approved' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    console.error('❌ Error fetching approved members:', error);
    res.status(500).json({ error: 'Failed to fetch approved members' });
  }
});

export default router;

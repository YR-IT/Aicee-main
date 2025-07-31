// backend/routes/memberRoutes.js
import express from 'express';
import {
  createMember,
  getPendingMembers,
  approveMember,
  rejectMember
} from '../controller/memberController.js';

const router = express.Router();

// ✅ Create new member
router.post('/', createMember);

// ✅ Get all pending members (for Admin)
router.get('/pending', getPendingMembers);

// ✅ Get approved members (for frontend)
router.get('/', async (req, res) => {
  try {
    const members = await Member.find({ status: 'approved' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    console.error('❌ Error fetching approved members:', error);
    res.status(500).json({ error: 'Failed to fetch approved members' });
  }
});

// ✅ Approve a member
router.patch('/:id/approve', approveMember);

// ✅ Reject (delete) a member
router.delete('/:id/reject', rejectMember);

export default router;

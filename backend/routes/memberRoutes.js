// backend/routes/memberRoutes.js
import express from 'express';
import {
  createMember,
  getPendingMembers,
  approveMember,
  rejectMember,
} from '../controller/memberController.js';

const router = express.Router();

// POST /api/members - Submit a member
router.post('/', createMember);

// GET /api/members - Get pending members
router.get('/', getPendingMembers);

// PATCH /api/members/:id/approve - Approve member
router.patch('/:id/approve', approveMember);

// DELETE /api/members/:id/reject - Reject member
router.delete('/:id/reject', rejectMember);

export default router;

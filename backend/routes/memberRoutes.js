import express from 'express';
import {
  createMember,
  getPendingMembers,
  getApprovedMembers,
  approveMember,
  rejectMember,
} from '../controller/memberController.js';

const router = express.Router();

router.post('/', createMember); // Form submission
router.get('/pending', getPendingMembers); // Admin panel
router.get('/approved', getApprovedMembers); // Members directory
router.patch('/:id/approve', approveMember); // Admin panel
router.delete('/:id/reject', rejectMember); // Admin panel

export default router;

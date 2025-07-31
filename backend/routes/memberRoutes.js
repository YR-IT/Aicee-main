// backend/routes/memberRoutes.js
import express from 'express';
import {
  createMember,        // ✅ Handles POST for new member submission
  getPendingMembers,   // ✅ Returns all unapproved members
  approveMember,       // ✅ Approves a member by ID
  rejectMember         // ✅ Rejects a member by ID
} from '../controller/memberController.js';

const router = express.Router();

// POST - Submit a new member application
router.post('/', createMember);

// GET - Retrieve all pending (unapproved) members
router.get('/', getPendingMembers);

// PATCH - Approve a member by ID
router.patch('/:id/approve', approveMember);

// DELETE - Reject a member by ID
router.delete('/:id/reject', rejectMember);

export default router;

// backend/controller/memberController.js

import Member from '../models/Member.js';


// ✅ Create a new member
export const createMember = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      address,
      city,
      country,
      zipCode,
      businessDescription,
      website,
      fax,
    } = req.body;

    // ✅ Validate only required fields
    if (!fullName || !phone || !email || !country || !zipCode || !businessDescription) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    const newMember = new Member({
      fullName,
      phone,
      email,
      address: address || '',
      city: city || '',
      country,
      zipCode,
      businessDescription,
      website: website || '',
      fax: fax || '',
      status: 'pending',
    });

    await newMember.save();

    res.status(201).json({
      success: true,
      message: 'Member submitted successfully',
      member: newMember,
    });
  } catch (error) {
    console.error('Create Member Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error while submitting member',
    });
  }
};


// ✅ Get all pending members
export const getPendingMembers = async (req, res) => {
  try {
    const members = await Member.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    console.error('Get Pending Members Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
};

// ✅ Approve a member by ID
export const approveMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json({ message: 'Member approved', member });
  } catch (err) {
    console.error('Approve Member Error:', err.message);
    res.status(500).json({ error: 'Failed to approve member' });
  }
};

// ✅ Reject (delete) a member by ID
export const rejectMember = async (req, res) => {
  try {
    const deleted = await Member.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Member not found' });
    res.json({ message: 'Member rejected and deleted' });
  } catch (err) {
    console.error('Reject Member Error:', err.message);
    res.status(500).json({ error: 'Failed to delete member' });
  }
};

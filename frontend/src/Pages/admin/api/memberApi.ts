import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// ✅ Get all PENDING members
export const fetchPendingMembers = async () => {
  const response = await axios.get(`${BASE_URL}/api/members/pending`);
  return response.data;
};

// ✅ Get all APPROVED members (for Members Directory)
export const fetchApprovedMembers = async () => {
  const response = await axios.get(`${BASE_URL}/api/members/approved`);
  return { members: response.data }; // ✅ match expected object shape
};

// ✅ Approve a member by ID
export const approveMember = async (id: string) => {
  const response = await axios.patch(`${BASE_URL}/api/members/${id}/approve`);
  return response.data;
};

// ✅ Reject a member by ID
export const rejectMember = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/members/${id}/reject`);
  return response.data;
};

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Interfaces
interface MemberResponse {
  members: Member[];
}

interface Member {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

// ✅ Get all PENDING members
export const fetchPendingMembers = async (): Promise<Member[]> => {
  const response = await axios.get<MemberResponse>(`${BASE_URL}/api/members/pending`);
  return response.data.members;
};

// ✅ Get all APPROVED members
export const fetchApprovedMembers = async (): Promise<Member[]> => {
  const response = await axios.get<MemberResponse>(`${BASE_URL}/api/members/approved`);
  return response.data.members;
};

// ✅ Get all REJECTED members
export const fetchRejectedMembers = async (): Promise<Member[]> => {
  const response = await axios.get<MemberResponse>(`${BASE_URL}/api/members/rejected`);
  return response.data.members;
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

// ✅ Delete an APPROVED member by ID
export const deleteApprovedMember = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/members/${id}`);
  return response.data;
};

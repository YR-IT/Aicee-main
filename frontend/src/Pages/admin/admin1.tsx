import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mail, Phone, Calendar, Check, X } from 'lucide-react';

interface Member {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

const AdminPanel: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/members`);
      setMembers(res.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/admin/members/${id}/approve`);
      setMembers(prev => prev.filter(m => m._id !== id));
    } catch (err) {
      console.error('Approve failed', err);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/members/${id}`);
      setMembers(prev => prev.filter(m => m._id !== id));
    } catch (err) {
      console.error('Reject failed', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel – Approve Members</h1>
      
      {loading ? (
        <p>Loading members...</p>
      ) : members.length === 0 ? (
        <p className="text-gray-600">No pending member requests.</p>
      ) : (
        <div className="space-y-4">
          {members.map(member => (
            <div key={member._id} className="bg-white shadow-md p-5 rounded-lg flex justify-between items-center border border-gray-200">
              <div>
                <p><span className="font-semibold">Name:</span> {member.fullName}</p>
                <p className="flex items-center text-sm text-gray-600"><Mail className="w-4 h-4 mr-1" /> {member.email}</p>
                <p className="flex items-center text-sm text-gray-600"><Phone className="w-4 h-4 mr-1" /> {member.phone}</p>
                <p className="flex items-center text-sm text-gray-500 mt-1"><Calendar className="w-4 h-4 mr-1" /> Applied on {new Date(member.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApprove(member._id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <Check className="w-4 h-4 mr-1" /> Approve
                </button>
                <button
                  onClick={() => handleReject(member._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <X className="w-4 h-4 mr-1" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, Check, X } from 'lucide-react';
import { fetchPendingMembers, approveMember, rejectMember } from '../admin/api/memberApi'; // Adjust the path if needed

interface Member {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

const MemberManager: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetchPendingMembers();
      setMembers(res);
    } catch (error) {
      console.error('❌ Error fetching pending members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await approveMember(id);
      setMembers(prev => prev.filter(m => m._id !== id));
      alert('✅ Member approved successfully!');
    } catch (err) {
      console.error('❌ Approve failed:', err);
      alert('Failed to approve member. Please try again.');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await rejectMember(id);
      setMembers(prev => prev.filter(m => m._id !== id));
      alert('❌ Member rejected successfully!');
    } catch (err) {
      console.error('❌ Reject failed:', err);
      alert('Failed to reject member. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">🙋‍♂️ Pending Member Requests</h2>

      {loading ? (
        <p className="text-gray-600">Loading pending members...</p>
      ) : members.length === 0 ? (
        <p className="text-gray-500 italic">No pending member requests.</p>
      ) : (
        <div className="space-y-4">
          {members.map(member => (
            <div
              key={member._id}
              className="bg-white border rounded-lg p-5 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-800">{member.fullName}</p>
                <p className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-1" /> {member.email}
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-1" /> {member.phone}
                </p>
                <p className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Applied on {new Date(member.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(member._id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <Check className="w-4 h-4 mr-1" /> Approve
                </button>
                <button
                  onClick={() => handleReject(member._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
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

export default MemberManager;

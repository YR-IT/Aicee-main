import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogManager from './BlogManager';
import MemberManager from './MemberManager';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'members'>('blogs');
  const navigate = useNavigate();

useEffect(() => {
  if (sessionStorage.getItem("isAdmin") !== "true") {
    navigate("/admin/login");
  }
}, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🛠️ Admin Dashboard</h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('blogs')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'blogs'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          📝 Manage Blogs
        </button>
        <button
          onClick={() => setActiveTab('members')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'members'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          ✅ Approve Members
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="max-w-5xl mx-auto">
        {activeTab === 'blogs' ? <BlogManager /> : <MemberManager />}
      </div>
    </div>
  );
};

export default AdminPanel;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Member {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  author: string;
  category: string;
  readTime: string;
  views: number;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [pendingMembers, setPendingMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [approving, setApproving] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [newBlog, setNewBlog] = useState<BlogPost>({
    title: '',
    excerpt: '',
    image: '',
    date: new Date().toISOString(),
    author: 'ADMIN',
    category: 'business',
    readTime: '5 min read',
    views: 0
  });
  const [blogSubmitting, setBlogSubmitting] = useState(false);

  useEffect(() => {
    const sessionCheck = localStorage.getItem('isLoggedIn');
    if (!sessionCheck || sessionCheck !== 'true') {
      navigate('/adminlogin');
      return;
    }
    setLoggedIn(true);

    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      navigate('/adminlogin');
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const fetchPending = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/pending-members');
      setPendingMembers(res.data);
    } catch (err) {
      console.error("Error fetching pending members:", err);
    } finally {
      setLoading(false);
    }
  };

  const approveMember = async (id: string) => {
    setApproving(id);
    try {
      await axios.post('http://localhost:5000/approve-member', { id });
      setPendingMembers(prev => prev.filter(m => m._id !== id));
    } catch (err) {
      console.error("Error approving member:", err);
    } finally {
      setApproving(null);
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSubmitting(true);
    try {
      await axios.post('http://localhost:5000/blogs', newBlog);
      setNewBlog({
        title: '',
        excerpt: '',
        image: '',
        date: new Date().toISOString(),
        author: 'ADMIN',
        category: 'business',
        readTime: '5 min read',
        views: 0
      });
      alert('Blog post created successfully!');
    } catch (err) {
      console.error("Error creating blog post:", err);
      alert('Failed to create blog post.');
    } finally {
      setBlogSubmitting(false);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  useEffect(() => {
    if (loggedIn) {
      fetchPending();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return null; // Render nothing until redirected
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Member Approval Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Approve Members</h2>
        {loading ? (
          <p>Loading pending requests...</p>
        ) : pendingMembers.length === 0 ? (
          <p>No pending members to review.</p>
        ) : (
          <div className="space-y-4">
            {pendingMembers.map(member => (
              <div key={member._id} className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="space-y-1">
                  <p><strong>Name:</strong> {member.fullname}</p>
                  <p><strong>Email:</strong> {member.email}</p>
                  <p><strong>Phone:</strong> {member.phone}</p>
                  <p className="text-sm text-gray-500">Applied on {new Date(member.createdAt).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => approveMember(member._id)}
                  disabled={approving === member._id}
                  className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50"
                >
                  {approving === member._id ? 'Approving...' : 'Approve'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Blog Entry Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Create New Blog Post</h2>
        <form onSubmit={handleBlogSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Excerpt</label>
            <textarea
              value={newBlog.excerpt}
              onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={newBlog.image || ''}
              onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={newBlog.category}
              onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="business">Business News</option>
              <option value="international">International</option>
              <option value="technology">Technology</option>
              <option value="policy">Policy Updates</option>
              <option value="monetary">Monetary Policy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Read Time</label>
            <input
              type="text"
              value={newBlog.readTime}
              onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="e.g., 5 min read"
            />
          </div>
          <button
            type="submit"
            disabled={blogSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {blogSubmitting ? 'Submitting...' : 'Create Blog Post'}
          </button>
        </form>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
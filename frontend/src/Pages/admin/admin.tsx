import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleImageUpload = async (): Promise<string | null> => {
    if (!image) return null;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'aicee_preset');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dkoostvfb/image/upload',
        formData
      );
      return response.data.secure_url;
    } catch (error: any) {
      alert('Image upload failed: ' + (error.response?.data?.error?.message || error.message));
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    const imageUrl = await handleImageUpload();
    if (!imageUrl) {
      setUploading(false);
      return;
    }

    const newPost = {
      title,
      author,
      excerpt: content.slice(0, 150),
      content,
      image: imageUrl,
      category: 'business',
      date: new Date(),
      views: 0,
      comments: 0,
      readTime: `${Math.ceil(content.split(' ').length / 200)} min read`
    };

    try {
      await axios.post(`${API_BASE_URL}/api/blogs`, newPost);
      alert('✅ Blog post created successfully!');
      setTitle('');
      setAuthor('');
      setContent('');
      setImage(null);
      fetchBlogs(); // refresh list
    } catch (error: any) {
      alert('❌ Failed to submit post: ' + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
      alert('🗑️ Blog deleted');
      fetchBlogs();
    } catch (error) {
      alert('❌ Failed to delete post.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-lg px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full border rounded-lg px-4 py-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full border rounded-lg px-4 py-2"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="block w-full"
            required
          />
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            {uploading ? 'Posting...' : 'Submit Post'}
          </button>
        </form>
      </div>

      {/* ✅ Recent Blogs Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">📚 Recent Blog Posts</h3>
        <div className="space-y-4">
          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs posted yet.</p>
          ) : (
            blogs.map((blog: any) => (
              <div key={blog._id} className="bg-white shadow rounded-lg p-4 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800">{blog.title}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  By {blog.author} • {blog.readTime}
                </p>
                <p className="text-gray-700 mb-3">{blog.excerpt}</p>
                <div className="flex gap-3">
                  <button
                    className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => alert('🛠️ Edit functionality coming soon')}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

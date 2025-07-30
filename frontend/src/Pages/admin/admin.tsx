import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (): Promise<string | null> => {
    if (!image) return null;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'aicee_preset'); // 👈 Ensure this preset is created and unsigned
    console.log('Uploading to Cloudinary with preset: aicee_preset');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dkoostvfb/image/upload',
        formData
      );
      console.log('✅ Cloudinary upload successful:', response.data);
      return response.data.secure_url;
    } catch (error: any) {
      const message = error.response?.data?.error?.message || error.message;
      console.error('❌ Image upload failed:', message);
      alert('Image upload failed: ' + message);
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
      await axios.post('https://aicee-main.onrender.com/api/admin', newPost);
      alert('✅ Blog post created successfully!');
      setTitle('');
      setAuthor('');
      setContent('');
      setImage(null);
    } catch (error: any) {
      const message = error.response?.data?.error || error.message;
      console.error('❌ Error submitting post:', message);
      alert('❌ Failed to submit post: ' + message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Author</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Content</label>
            <textarea
              className="w-full border rounded-lg px-4 py-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="block w-full"
              required
            />
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            {uploading ? 'Posting...' : 'Submit Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
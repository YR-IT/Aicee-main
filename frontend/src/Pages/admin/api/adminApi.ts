import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface BlogPostData {
  title: string;
  content: string;
  imageUrl: string; // Cloudinary image URL
  author?: string;
}

export const createBlogPost = async (data: BlogPostData) => {
  try {
    const payload = {
      title: data.title,
      content: data.content,
      image: data.imageUrl,
      author: data.author?.trim() || 'Admin',
      category: 'business',
      excerpt: data.content.slice(0, 150) + '...',
      readTime: `${Math.ceil(data.content.split(' ').length / 200)} min`,
      views: 0,
    };

    console.log('➡️ Submitting blog to:', `${API_BASE_URL}/api/blogs`);
    console.log('📦 Payload:', payload);

    const res = await axios.post(`${API_BASE_URL}/api/blogs`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (error: any) {
    console.error('❌ Error submitting blog post:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to submit blog post');
  }
};

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
      author: data.author,
      category: 'business',
      date: new Date(),
      views: 0,
      comments: 0,
      excerpt: data.content.slice(0, 150),
      readTime: `${Math.ceil(data.content.split(' ').length / 200)} min read`
    };

    const res = await axios.post(`${API_BASE_URL}/api/blogs`, FormData, {

      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (error: any) {
    console.error('Error submitting blog post:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to submit blog post');
  }
};

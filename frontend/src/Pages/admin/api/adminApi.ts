import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface BlogPostData {
  title: string;
  content: string;
  image: File; // should be a File object from input[type="file"]
  author?: string;
}

export const createBlogPost = async (data: BlogPostData) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image);

    if (data.author) {
      formData.append('author', data.author);
    }

    const res = await axios.post(`${API_BASE_URL}/api/admin/blogs`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
  } catch (error: any) {
    console.error('Error submitting blog post:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to submit blog post');
  }
};

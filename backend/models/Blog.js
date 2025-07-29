import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true, // Cloudinary image URL
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    default: 'Admin',
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  readTime: {
    type: String,
    trim: true,
  },
  views: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Blog', blogSchema);

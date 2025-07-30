import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
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
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true, // Cloudinary URL
      trim: true,
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
      default: 'General',
      trim: true,
    },
    readTime: {
      type: String,
      default: '2 min',
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

export default mongoose.model('Blog', blogSchema);

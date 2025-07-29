import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  image: String,
  date: Date,
  author: String,
  category: String,
  readTime: String,
  views: Number
});

export default mongoose.model('Blog', blogSchema);

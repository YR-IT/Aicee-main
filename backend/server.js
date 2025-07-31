// backend/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import blogRoutes from './routes/blogRoutes.js';
import memberRoutes from './routes/memberRoutes.js'; // ✅ Member routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Cloudinary ENV Check
console.log('🌐 Cloudinary ENV Check:', {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET ? 'Exists ✅' : 'Missing ❌',
});

// ✅ CORS Setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://aicee-main.vercel.app',
  'https://aicee-main.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('❌ CORS blocked:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// ✅ Body parsers
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// ✅ Dummy icon routes to silence 404s
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/apple-touch-icon.png', (req, res) => res.status(204).end());
app.get('/apple-touch-icon-precomposed.png', (req, res) => res.status(204).end());

// ✅ API Routes
app.use('/api/blogs', blogRoutes);        // Blogs
app.use('/api/members', memberRoutes);    // Members

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ AICEE Backend is running!');
});

// ✅ 404 handler (must be last)
app.use((req, res, next) => {
  console.warn(`❌ Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// ✅ MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

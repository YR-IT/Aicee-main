import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Cloudinary ENV Check
console.log('🌐 Cloudinary ENV Check:', {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET ? 'Exists ✅' : 'Missing ❌',
});

// ✅ CORS: Whitelist your frontend domains
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

// ✅ Request body parsers
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// ✅ Routes
app.use('/api/blogs', blogRoutes);


// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ AICEE Backend is running!');
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit if DB fails
  });

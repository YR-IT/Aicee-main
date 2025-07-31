// backend/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import blogRoutes from './routes/blogRoutes.js';
import memberRoutes from './routes/memberRoutes.js'; // ✅ correct import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://aicee-main.vercel.app',
  'https://aicee-main.onrender.com',
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
  credentials: true,
}));

// ✅ Body parsers
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// ✅ Mount API routes
app.use('/api/blogs', blogRoutes);
app.use('/api/members', memberRoutes); // ✅ THIS is what enables /api/members

// ✅ Favicon fallback
app.get('/favicon.ico', (req, res) => res.status(204).end());

// ✅ Root
app.get('/', (req, res) => {
  res.send('✅ AICEE Backend is running!');
});

// ✅ 404 fallback
app.use((req, res, next) => {
  console.warn(`❌ Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

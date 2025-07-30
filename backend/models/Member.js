import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending',
  },
  role: {
    type: String,
    enum: ['member', 'admin'],
    default: 'member',
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true
});

const Member = mongoose.model('Member', memberSchema);
export default Member;

import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Member', memberSchema);

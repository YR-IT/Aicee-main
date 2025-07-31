import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
  businessDescription: { type: String },
  website: { type: String },
  fax: { type: String },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);
export default Member;

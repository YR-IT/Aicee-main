import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },   // ✅ Added state field (used in frontend filter)
  country: { type: String, required: true },
  zipCode: { type: String, required: true },  // ✅ Correct name is zipCode (frontend uses pincode variable)
  businessDescription: { type: String, required: true },
  website: { type: String, default: '' },
  fax: { type: String, default: '' },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);

export default Member;

import mongoose from 'mongoose';

const suppliers = new mongoose.Schema({
  label: {
    type: String,
  },
  identification: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

export default mongoose.model('suppliers', suppliers);

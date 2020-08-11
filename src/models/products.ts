import mongoose from 'mongoose';

const products = new mongoose.Schema({
  label: {
    type: String,
  },
  identification: {
    type: String,
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE',
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

export default mongoose.model('products', products);

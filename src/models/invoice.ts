import mongoose from 'mongoose';

const invoice = new mongoose.Schema({
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
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'products',
  },
  quantity: {
    type: Number,
  },
  unit: {
    type: mongoose.Types.ObjectId,
    ref: 'unitConversation',
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

export default mongoose.model('invoice', invoice);

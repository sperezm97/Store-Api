import mongoose from 'mongoose';

const unitConversation = new mongoose.Schema({
  label: {
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

export default mongoose.model('unitConversation', unitConversation);

import mongoose from 'mongoose';

const unitConversation = new mongoose.Schema(
  {
    label: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('unitConversation', unitConversation);

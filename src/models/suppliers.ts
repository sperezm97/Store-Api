import mongoose from 'mongoose';

const suppliers = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('suppliers', suppliers);

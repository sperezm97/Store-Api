import mongoose from 'mongoose';

const departments = new mongoose.Schema(
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

export default mongoose.model('departments', departments);

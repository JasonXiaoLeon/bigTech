import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    fileHash: { type: String, unique: true },
    data: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.models.File || mongoose.model('File', FileSchema);

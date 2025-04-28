import mongoose, { Document, Schema } from 'mongoose';

export interface IHashChunk extends Document {
  chunkHash: string; // 文件分片的哈希值
}

const HashChunkSchema: Schema = new Schema(
  {
    chunkHash: { type: String, required: true },
  },
  {
    timestamps: true, // 保存创建时间和更新时间
  }
);

const HashChunk = mongoose.models.HashChunk || mongoose.model<IHashChunk>('HashChunk', HashChunkSchema, 'hashchunks');

export default HashChunk;

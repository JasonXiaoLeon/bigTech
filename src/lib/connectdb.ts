// lib/connectDB.ts

import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'Edge';  // 默认数据库名称

  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  const options = {
    dbName,  // 选择数据库
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,  // 设置连接超时为30秒
    socketTimeoutMS: 30000,   // 设置socket超时为30秒
  };

  // 使用 Mongoose 连接数据库
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

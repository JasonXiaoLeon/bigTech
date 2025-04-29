// models/User.ts
import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String },
    age: { type: Number },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
    isDelete: { type: Number, default: 0 },
    refreshToken: { type: String },
    refreshTokenExpires: { type: Number },
    newPassword: { type: String, default: '' },
    permissionLevel: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema,'users');

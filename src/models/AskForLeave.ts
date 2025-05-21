// models/LeaveRequest.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaveRequest extends Document {
  email: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  reason?: string;
  status: string;
}

const LeaveRequestSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    leaveType: {
      type: String,
      required: true,
      enum: ['事假', '病假', '年假', '其他'],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
    },
  },
  {
    timestamps: true,
  }
);

// 防止模型重复注册
export default mongoose.models.LeaveRequest ||
  mongoose.model<ILeaveRequest>('LeaveRequest', LeaveRequestSchema,'askForLeave');

import mongoose, { Schema, Document } from 'mongoose'

interface IUserOperation extends Document {
  email: string
  datetime: string
  operationType: string
  purpose: string
  timestamp: Date
}

const UserOperationSchema: Schema = new Schema({
  email: { type: String, required: true },
  datetime: { type: String, required: true },
  operationType: { type: String, required: true },
  purpose: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
})

const UserOperation = mongoose.model<IUserOperation>('UserOperation', UserOperationSchema)

export default UserOperation

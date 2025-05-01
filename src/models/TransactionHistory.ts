import mongoose, { Schema, Document } from 'mongoose'

export interface ITransactionHistory extends Document {
  email: string
  type: 'Buy' | 'Sell'
  asset: string
  amount: number
  date: Date
  createdAt?: Date
  updatedAt?: Date
}

const TransactionHistorySchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    type: { type: String, enum: ['Buy', 'Sell'], required: true },
    asset: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.TransactionHistory ||
  mongoose.model<ITransactionHistory>(
    'TransactionHistory',
    TransactionHistorySchema,
    'transactionhistory'
  )

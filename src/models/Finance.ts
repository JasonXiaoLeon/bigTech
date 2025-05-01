import mongoose, { Schema, Document, model } from 'mongoose'

export interface IUserFinance extends Document {
  email: string
  balance: number
  stocks: number
  funds: number
  cryptcurrency: number
}

const UserFinanceSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    stocks: {
      type: Number,
      required: true,
      default: 0,
    },
    funds: {
      type: Number,
      required: true,
      default: 0,
    },
    cryptcurrency: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const UserFinance =
  mongoose.models.UserFinance || model<IUserFinance>('UserFinance', UserFinanceSchema,"finance")

export default UserFinance

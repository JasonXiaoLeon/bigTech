import mongoose, { Schema, Document, model } from 'mongoose'

export interface IUserFinance extends Document {
  email: string
  balance: string
  stocks: string
  funds: string
  cryptcurrency: string
}

const UserFinanceSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    balance: {
      type: String,
      required: true,
      default: '0',
    },
    stocks: {
      type: String,
      required: true,
      default: '0',
    },
    funds: {
      type: String,
      required: true,
      default: '0',
    },
    cryptcurrency: {
      type: String,
      required: true,
      default: '0',
    },
  },
  {
    timestamps: true,
  }
)

const UserFinance =
  mongoose.models.UserFinance || model<IUserFinance>('UserFinance', UserFinanceSchema, "finance")

export default UserFinance

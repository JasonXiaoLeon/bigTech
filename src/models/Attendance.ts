import mongoose from 'mongoose'

const AttendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  clockIn: { type: String },
  clockOut: { type: String }
})

const Attendance =
  mongoose.models.Attendance || mongoose.model('Attendance', AttendanceSchema, 'attendance')

export default Attendance

// /api/auth/user/schedule/route.ts

import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/lib/connectdb'

export async function GET(req: Request) {
  try {
    await connectDB()

    const url = new URL(req.url)
    const start = url.searchParams.get('startDate')
    const end = url.searchParams.get('endDate')

    if (!start || !end) {
      return NextResponse.json({ error: 'Missing startDate or endDate' }, { status: 400 })
    }

    const Attendance = mongoose.connection.collection('attendance')

    const records = await Attendance.find({
      date: {
        $gte: start,
        $lte: end,
      },
    }).toArray()

    return NextResponse.json(records)
  } catch (error) {
    console.error('Error fetching attendance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

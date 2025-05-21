// app/api/auth/user/leave/route.ts
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/connectdb'
import LeaveRequest from '@/models/AskForLeave'

export async function GET() {
  try {
    await connectDB()
    const requests = await LeaveRequest.find().sort({ createdAt: -1 })
    return NextResponse.json(requests)
  } catch (error) {
    console.error('获取请假列表失败:', error)
    return NextResponse.json({ message: '服务器错误' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/connectdb'
import LeaveRequest from '@/models/AskForLeave'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB()
  const { id } = params

  try {
    const updated = await LeaveRequest.findByIdAndUpdate(id, { status: 'approved' }, { new: true })
    console.log(updated)
    if (!updated) {
      return NextResponse.json({ error: '未找到对应记录' }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    return NextResponse.json({ error: '服务器错误' }, { status: 500 })
  }
}

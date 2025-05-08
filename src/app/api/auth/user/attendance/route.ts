// route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { connectDB } from '@/lib/connectdb'
import Attendance from '@/models/Attendance'
import { getUserByEmail } from '@/service/userService'

export const GET = async (req: Request) => {
    await connectDB()
    const session = await auth()
  
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: '未授权，用户信息缺失' }, { status: 401 })
    }
  
    const user = await getUserByEmail(session.user.email)
  
    if (!user) {
      return NextResponse.json({ error: '未找到用户' }, { status: 404 })
    }
  
    // 获取所有预约记录
    const attendance = await Attendance.find().lean()
  
    // 获取已预约的不同用户数量
    const uniqueUsers = new Set(attendance.map((att: any) => att.email))  // 假设每个预约记录有一个 email 字段
    const numUsersBooked = uniqueUsers.size  // 计算唯一用户数量
    return NextResponse.json({
      permissionLevel: user.permissionLevel,
      attendance,
      numUsersBooked,  // 返回已预约用户数量
    })
}

export const POST = async (req: Request) => {
    await connectDB()
    const session = await auth()
  
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: '未授权，用户信息缺失' }, { status: 401 })
    }
  
    const user = await getUserByEmail(session.user.email)
  
    if (!user) {
      return NextResponse.json({ error: '未找到用户' }, { status: 404 })
    }
  
    try {
      const body = await req.json()
      const { selectedDays, email, name } = body
  
      if (!Array.isArray(selectedDays) || selectedDays.length === 0) {
        return NextResponse.json({ error: 'selectedDays 无效' }, { status: 400 })
      }
  
      const today = new Date()
      const currentMonday = new Date(today)
      const dayOfWeek = currentMonday.getDay() || 7
      currentMonday.setDate(today.getDate() - dayOfWeek + 1)
      currentMonday.setHours(0, 0, 0, 0)
  
      // 构建日期数据并插入数据库
      const records = selectedDays.map((dayName: string) => {
        const index = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].indexOf(dayName)
        const date = new Date(currentMonday)
        date.setDate(currentMonday.getDate() + index)
        return {
          email,
          name,
          date,
          clockIn: '',
          clockOut: '',
        }
      })
  
      await Attendance.insertMany(records)
  
      return NextResponse.json({ message: '预约成功', records }, { status: 200 })
    } catch (error) {
      console.error('预约提交出错:', error)
      return NextResponse.json({ error: '服务器内部错误' }, { status: 500 })
    }
  }
  
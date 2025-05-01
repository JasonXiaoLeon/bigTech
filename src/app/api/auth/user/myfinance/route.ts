import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/connectdb'
import { auth } from '@/lib/auth'
import { getUserFinanceByEmail } from '@/service/userService'

export const GET = async () => {
  await connectDB()
  const session = await auth()

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  try {
    const finance = await getUserFinanceByEmail(session.user.email)
    if (!finance) {
      return NextResponse.json({ error: '未找到财务信息' }, { status: 404 })
    }

    return NextResponse.json(finance)
  } catch (error) {
    return NextResponse.json({ error: '服务器错误' }, { status: 500 })
  }
}

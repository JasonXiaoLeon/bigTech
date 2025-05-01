import { auth } from '@/lib/auth'
import { connectDB } from '@/lib/connectdb'
import { getUserTransactions } from '@/service/userService'
import { NextResponse } from 'next/server'

export const GET = async () => {
  await connectDB()
  const session = await auth()
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userEmail = session.user.email
    const transactions = await getUserTransactions(userEmail)
    return NextResponse.json({ transactions })
  } catch (err: any) {
    console.error('Error fetching transactions:', err)
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 })
  }
}

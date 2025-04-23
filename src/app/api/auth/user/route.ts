import { getUserByEmail, updateUserByEmail } from '@/service/userService'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    const user = await getUserByEmail(email)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { email, updates } = await req.json()

    if (!email || !updates) {
      return NextResponse.json({ error: 'Missing email or updates' }, { status: 400 })
    }

    if (updates.newPassword) {
      const hashedPassword = await bcrypt.hash(updates.newPassword, 10)
      updates.password = hashedPassword
      delete updates.newPassword;
    }

    const result = await updateUserByEmail(email, updates)

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: 'User not updated' }, { status: 404 })
    }

    return NextResponse.json({ message: 'User updated successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


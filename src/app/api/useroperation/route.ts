import { auth } from '@/lib/auth'
import clientPromise from '@/lib/databse'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const client = await clientPromise
    const db = client.db('Edge')
    const collection = db.collection('useroperation')

    const data = await req.json()

    const operationLog = {
      ...data,
      timestamp: new Date(),
    }

    const result = await collection.insertOne(operationLog)

    return NextResponse.json({ success: true, insertedId: result.insertedId })
  } catch (error) {
    console.error('[UserOperation API Error]', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const session = await auth()

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userEmail = session.user.email

    const client = await clientPromise
    const db = client.db('Edge')
    const collection = db.collection('useroperation')

    const userOperations = await collection.find({ email: userEmail }).toArray()

    if (userOperations.length === 0) {
      return NextResponse.json({ message: 'No operations found for this user.' })
    }

    return NextResponse.json({ success: true, data: userOperations })

  } catch (error) {
    console.error('[UserOperation API Error]', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
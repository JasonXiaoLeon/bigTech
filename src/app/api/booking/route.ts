import clientPromise from '@/lib/databse'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const client = await clientPromise
    const db = client.db('Edge')
    const collection = db.collection('booking')

    const data = await req.json()

    const bookingData = {
      ...data,
      createdAt: new Date(),
    }

    const result = await collection.insertOne(bookingData)

    return NextResponse.json({ success: true, insertedId: result.insertedId })
  } catch (error) {
    console.error('[Booking API Error]', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

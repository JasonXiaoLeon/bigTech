import clientPromise from "@/lib/databse"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

type Params = {
  params: {
    email: string
  }
}
// GET /api/booking/[email]
export async function GET(req: Request, { params }: Params) {
  try {
    const { email } = params

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('Edge')
    const collection = db.collection('booking')

    const bookings = await collection
      .find({ email })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('[Booking API Error - GET]', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

// PUT /api/booking/[email]
export async function PUT(req: Request, { params }: Params) {
  try {
    const { email } = params
    const { _id, datetime, purpose, isCancelled } = await req.json()

    if (!email || !_id || !datetime || !purpose) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const objectId = new ObjectId(_id)

    const client = await clientPromise
    const db = client.db('Edge')
    const collection = db.collection('booking')

    const updatedBooking = {
      datetime,
      purpose,
      updatedAt: new Date(),
      isCancelled,
    }

    const result = await collection.updateOne(
      { _id: objectId, email },
      { $set: updatedBooking }
    )

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: 'No booking updated' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Booking API Error - PUT]', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

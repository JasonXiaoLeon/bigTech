import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import clientPromise from '@/lib/databse'

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing email or password' }, { status: 400 })
        }

        const client = await clientPromise
        const db = client.db('Edge')
        const usersCollection = db.collection('users')

        const existingUser = await usersCollection.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = {
            email,
            password: hashedPassword,
            gender: 'unknown',
            age: null,
            avatar: '',
            createdAt: new Date(),
            isDelete: 0,
            permissionLevel:3,
        }

        await usersCollection.insertOne(newUser)

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
    } catch (error) {
        console.error('Error creating user:', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}

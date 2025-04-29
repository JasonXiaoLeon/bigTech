import { updateMultipleUsers } from '@/service/userService';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const users = await req.json();

    if (!Array.isArray(users)) {
      return NextResponse.json({ error: 'Invalid users format' }, { status: 400 });
    }

    const result = await updateMultipleUsers(users);

    if (!result.acknowledged) {
      return NextResponse.json({ error: 'Failed to update users' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Users updated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// app/api/auth/refresh/route.ts

import { refreshAccessToken } from '@/service/refreshTokenService'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const refreshToken = req.cookies.get('refreshToken')?.value
    console.log(refreshToken)
    if (!refreshToken) {
        return NextResponse.json({ error: 'No refresh token provided' }, { status: 400 })
    }

    console.log('Generating new access token');

    try {
        const newAccessToken = await refreshAccessToken(refreshToken)
        return NextResponse.json({ accessToken: newAccessToken })
    } catch (err) {
        return NextResponse.json({ error: (err as Error).message }, { status: 401 })
    }
}

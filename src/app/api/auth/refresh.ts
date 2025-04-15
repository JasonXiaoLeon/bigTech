import { NextApiRequest, NextApiResponse } from 'next'
import { generateAccessToken, verifyRefreshToken } from '@/utils/auth'
import { getUserByEmail } from '@/service/userService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { refreshToken } = req.cookies
    if (!refreshToken) return res.status(401).json({ message: 'Missing refresh token' })

    try {
        const payload = verifyRefreshToken(refreshToken) as { email: string }
        const user = await getUserByEmail(payload.email)

        if (!user) return res.status(403).json({ message: 'Invalid refresh token' })

        const accessToken = generateAccessToken({ email: user.email })
        res.status(200).json({ accessToken })
    } catch {
        return res.status(403).json({ message: 'Invalid refresh token' })
    }
}

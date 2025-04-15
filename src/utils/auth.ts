import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET!
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET!

export function generateAccessToken(payload: any) {
    const token = jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' })
    console.log('Generated Access Token:', token) // 打印 Access Token
    return token
}

export function generateRefreshToken(payload: any) {
    const token = jwt.sign(payload, REFRESH_SECRET, { expiresIn: '30d' })
    console.log('Generated Refresh Token:', token) // 打印 Refresh Token
    return token
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, ACCESS_SECRET)
}

export function verifyRefreshToken(token: string) {
    return jwt.verify(token, REFRESH_SECRET)
}

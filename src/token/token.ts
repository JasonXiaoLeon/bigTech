export function decodeJWT(token: string): { [key: string]: any } | null {
    try {
      const payload = token.split('.')[1]
      const decoded = Buffer.from(payload, 'base64').toString()
      return JSON.parse(decoded)
    } catch (error) {
      console.error('Failed to decode JWT:', error)
      return null
    }
  }
  
export function isJwtAccessTokenValid(token: string): boolean {
    const decoded = decodeJWT(token)
    if (!decoded?.exp) return false
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp > now
}

export function isDbTokenExpired(expireTime: number): boolean {
    const now = Math.floor(Date.now() / 1000)
    return expireTime < now
}
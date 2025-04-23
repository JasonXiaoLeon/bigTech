import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { CustomNextMiddleware } from '@/types/Middleware'
import { isDbTokenExpired } from '@/token/token'

export function authMiddleware(next: CustomNextMiddleware): CustomNextMiddleware {
  return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
    const { nextUrl } = req
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
    const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`)

    const token = await getToken({ req, secret: process.env.AUTH_SECRET })
    const now = Math.floor(Date.now() / 1000)
    // const isTokenExpired = token?.exp && token.exp < now
    const isLoggedIn = !!token?.email && !isDbTokenExpired(token.exp)
    
    if (isOnDashboard && !isLoggedIn) {
      const loginUrl = new URL(
        `/${locale}/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
        req.url
      )
      return NextResponse.redirect(loginUrl)
    }

    return next(req, event, res)
  }
}

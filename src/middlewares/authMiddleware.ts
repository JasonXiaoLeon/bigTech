// import NextAuth from 'next-auth'
// import { authConfig } from '../../auth.config'

// export default NextAuth(authConfig).auth

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

// authMiddleware.ts
import { NextRequest, NextFetchEvent, NextResponse, NextMiddleware } from 'next/server'

export function authMiddleware(next: NextMiddleware): NextMiddleware {
    return async (req: NextRequest, event: NextFetchEvent) => {
        console.log('Auth Middleware triggered')

        const { nextUrl } = req
        const locale = nextUrl.locale || 'en'
        const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`)
        const isLoggedIn = false // 模拟未登录

        if (isOnDashboard && !isLoggedIn) {
            const loginUrl = new URL(
                `/${locale}/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
                nextUrl
            )
            return NextResponse.redirect(loginUrl)
        }
        return next(req, event)
    }
}

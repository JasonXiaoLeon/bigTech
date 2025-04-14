import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import type { CustomNextMiddleware } from '@/types/Middleware'

export function authMiddleware(next: CustomNextMiddleware): CustomNextMiddleware {
    return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
        const { nextUrl } = req
        const locale = req.cookies.get('NEXT_LOCALE')?.value

        const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`)
        const isLoggedIn = false
        if (isOnDashboard && !isLoggedIn) {
            const loginUrl = new URL(
                `/${locale}/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
                nextUrl
            )
            return NextResponse.redirect(loginUrl)
        }

        return next(req, event, res)
    }
}

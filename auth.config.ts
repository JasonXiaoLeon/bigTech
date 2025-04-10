import { NextAuthConfig } from 'next-auth'
import { NextResponse } from 'next/server'

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const locale = nextUrl.locale || 'en'
            const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`)

            if (isOnDashboard) {
                if (isLoggedIn) {
                    return true
                } else {
                    const loginUrl = new URL(
                        `/${locale}/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
                        nextUrl
                    )
                    return NextResponse.redirect(loginUrl)
                }
            }

            return true
        },
    },
    providers: [],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            email: string
            gender: string
            refreshToken?: string
        } | null
    }

    interface User {
        id: string
        email: string
        gender: string
        refreshToken?: string
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        email: string
        gender: string
        exp: number
        refreshToken: string
    }
}

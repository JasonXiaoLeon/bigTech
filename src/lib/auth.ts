import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        GitHub,
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const email = 'admin@admin.com'
                const password = '123456'
                const role = 'admin'

                // 模拟认证
                if (credentials?.email === email && credentials?.password === password) {
                    return { email, role } // 返回用户信息，包含角色
                } else {
                    throw new Error('Invalid credentials.')
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.role = user.role
            }
            return token
        },
        
        async session({ session, token }) {
            console.log('Session callback:', token)
            if (token) {
                session.user.email = token.email as string
                session.user.role = token.role as string
            }
            return session
        },
    },
})

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserByEmail, updateUserRefreshToken } from '@/service/userService'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const REFRESH_TOKEN_EXPIRE_IN = parseInt(process.env.REFRESH_TOKEN_EXPIRE_IN || '2592000', 10)

export const { auth, handlers, signIn, signOut: signOutNextAuth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string
        const password = credentials?.password as string

        if (!email || !password) {
          throw new Error('Missing email or password.')
        }

        const user = await getUserByEmail(email)

        if (!user || !user.password) {
          throw new Error('User not found.')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
          throw new Error('Invalid credentials.')
        }

        return {
          id: user.id,
          email: user.email,
          gender: user.gender,
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60,
    updateAge: 0,
  },

  callbacks: {
    async jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000)

      if (user) {
        token.email = user.email as string
        token.gender = user.gender

        const refreshToken = uuidv4()
        token.refreshToken = refreshToken
        const refreshTokenExpires = now + REFRESH_TOKEN_EXPIRE_IN
        token.exp = now + 5

        await updateUserRefreshToken(user.email as string, refreshToken, refreshTokenExpires)
        return token
      }
      return token
    },

    async session({ session, token }) {
      if (token && token.email) {
        session.user = {
          ...session.user,
          email: token.email,
          gender: token.gender,
        }
      }

      return session
    },
  },
})

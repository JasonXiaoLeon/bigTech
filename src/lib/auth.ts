import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUserByEmail } from '@/service/userService'
import bcrypt from 'bcrypt'
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

// const REFRESH_TOKEN_EXPIRE_IN = parseInt(process.env.REFRESH_TOKEN_EXPIRE_IN || '2592000', 10)
// const ACCESS_TOKEN_EXPIRE_IN = parseInt(process.env.ACCESS_TOKEN_EXPIRE_IN || '300', 10)
// const AUTH_SECRET = process.env.AUTH_SECRET || 'edgeBigTech123456'

export const { auth, handlers, signIn, signOut: signOutNextAuth } = NextAuth({
  providers: [
    Google,
    GitHub,
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
          avatar: user.avatar,
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60*60*24*7,
    updateAge: 0 ,
  },

  callbacks: {
    async jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000)

      if (user) {
        token.email = user.email as string
        token.gender = user.gender as string
        token.avatar = user.avatar as string;
        // const accessToken = sign(
        //   { email: user.email, gender: user.gender },
        //   AUTH_SECRET,
        //   { expiresIn: ACCESS_TOKEN_EXPIRE_IN }
        // )
        // token.accessToken = accessToken

        // const refreshToken = uuidv4()
        // token.refreshToken = refreshToken
        // const refreshTokenExpires = now + REFRESH_TOKEN_EXPIRE_IN

        // await updateUserRefreshToken(user.email as string, refreshToken, refreshTokenExpires)
        return token
      }
      return token
    },
    async session({ session, token, }) {
      if (token) {
        session.user = {
          ...session.user,
          email: token.email,
          gender: token.gender,
          avatar: token.avatar,
          accessToken: token.accessToken,
          // refreshToken: token.refreshToken
        }
      }
      // console.log(session)
      return session
    },
  },
})

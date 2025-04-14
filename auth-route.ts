// // lib/auth.ts
// import NextAuth from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
// import { z } from 'zod'
// import bcrypt from 'bcrypt'
// import { authConfig } from './auth.config'

// const usersDb = [
//     {
//         email: 'user@example.com',
//         password: '$2b$10$2hGiS4tMqEUP4KnJpnd5Be7M9ICfWx.Ae0CTFo8AvN.RlxoqxgyxC', // 123456
//         id: '1',
//         role: 'admin',
//     },
//     {
//         email: 'user2@example.com',
//         password: '$2b$10$kz7Z5sW4cQeO3Jt6m1qV3uYd7wvA2B.C1D8EfGhIjKlMnOpQrStUy', // password456
//         id: '2',
//         role: 'user',
//     },
// ]

// export const { handlers, auth, signIn, signOut } = NextAuth({
//     ...authConfig,
//     providers: [
//         Credentials({
//             async authorize(credentials) {
//                 const parsedCredentials = z
//                     .object({
//                         email: z.string().email(),
//                         password: z.string().min(6),
//                     })
//                     .safeParse(credentials)

//                 if (!parsedCredentials.success) return null

//                 const { email, password } = parsedCredentials.data
//                 const user = usersDb.find((u) => u.email === email)

//                 if (!user || !(await bcrypt.compare(password, user.password))) {
//                     return null
//                 }
//                 return {
//                     id: user.id,
//                     email: user.email,
//                     role: user.role,
//                 }
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id
//                 token.role = user.role
//             }
//             return token
//         },
//         async session({ session, token }) {
//             session.user.id = token.id as string
//             session.user.role = token.role as string
//             return session
//         },
//     },
// })

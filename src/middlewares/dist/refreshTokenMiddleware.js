// import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
// import { getToken } from 'next-auth/jwt'
// import type { CustomNextMiddleware } from '@/types/Middleware'
// import { getRefreshExpireTimeByUser, getTokenByUser } from '@/service/userService'
// export function refreshTokenMiddleware(next: CustomNextMiddleware): CustomNextMiddleware {
//     return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
//         const token = await getToken({ req, secret: process.env.AUTH_SECRET })
//         if (token?.email) {
//             const refreshToken = await getTokenByUser(token.email)
//             const refreshExp = await getRefreshExpireTimeByUser(token.email)
//         }
//         }
//         return next(req, event, res)
//     }
// }

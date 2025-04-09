// middleware.ts
import { authMiddleware } from './middlewares/authMiddleware'
import { i18nMiddleware } from './middlewares/i18nMiddleware'
import { chain } from './middlewares/chain'

const middlewares = [authMiddleware, i18nMiddleware]

export default chain(middlewares)

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}

// webp -> image

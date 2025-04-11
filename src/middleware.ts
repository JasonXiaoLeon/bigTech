import { printUrlMiddleware } from './middlewares/printUrlMiddleware'
import { chain } from './middlewares/chain'
import { authMiddleware } from './middlewares/authMiddleware'
import { i18nMiddleware } from './middlewares/i18nMiddleware'

const middlewares = [printUrlMiddleware, i18nMiddleware, authMiddleware]
export default chain(middlewares)

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}

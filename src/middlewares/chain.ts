import { NextMiddleware, NextRequest, NextResponse, NextFetchEvent } from 'next/server'

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

export function chain(functions: MiddlewareFactory[], index = 0): NextMiddleware {
    const current = functions[index]
    if (current) {
        const next = chain(functions, index + 1)
        return async (req: NextRequest, event: NextFetchEvent) => {
            const response = await current(next)(req, event)
            return response || NextResponse.next()
        }
    }
    return () => NextResponse.next()
}

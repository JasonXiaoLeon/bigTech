import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import type { MiddlewareFactory, CustomNextMiddleware } from '@/types/Middleware'

export function chain(functions: MiddlewareFactory[], index = 0): CustomNextMiddleware {
    const current = functions[index]
    if (current) {
        const next = chain(functions, index + 1)
        return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
            const response = await current(next)(req, event, res)
            return response || NextResponse.next()
        }
    }

    return (_, __, res) => res || NextResponse.next()
}

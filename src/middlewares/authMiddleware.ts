import { NextMiddleware, NextFetchEvent, NextRequest } from 'next/server'

export function authMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const url = request.url
        console.log('authMiddleware => ', { url })
        return middleware(request, event)
    }
}

export default authMiddleware

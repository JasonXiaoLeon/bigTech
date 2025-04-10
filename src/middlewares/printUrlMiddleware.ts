import { NextMiddleware, NextFetchEvent, NextRequest } from 'next/server'

export function printUrlMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const url = request.url
        console.log('printMiddleware => ', { url })
        return middleware(request, event)
    }
}

export default printUrlMiddleware

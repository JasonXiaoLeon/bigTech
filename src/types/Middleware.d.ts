import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'

export type CustomNextMiddleware = (
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
) => Promise<NextResponse> | NextResponse

export type MiddlewareFactory = (middleware: CustomNextMiddleware) => CustomNextMiddleware

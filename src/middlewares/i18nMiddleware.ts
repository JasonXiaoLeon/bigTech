import createMiddleware from 'next-intl/middleware'
import { routing } from '../i18n/routing'
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'
import type { CustomNextMiddleware } from '@/types/Middleware'

const baseMiddleware = createMiddleware(routing)

export function i18nMiddleware(middleware: CustomNextMiddleware): CustomNextMiddleware {
    return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
        const intlResponse = await baseMiddleware(req)

        if (intlResponse && (intlResponse.redirected || intlResponse.status !== 200)) {
            return intlResponse
        }

        return middleware(req, event, intlResponse || res)
    }
}

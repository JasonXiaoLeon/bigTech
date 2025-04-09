import createMiddleware from 'next-intl/middleware'
import { routing } from '../i18n/routing'
import { NextMiddleware, NextRequest } from 'next/server'

const baseMiddleware = createMiddleware(routing)

export function i18nMiddleware(): NextMiddleware {
    return async (request: NextRequest) => {
        return baseMiddleware(request)
    }
}

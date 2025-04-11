import { CustomNextMiddleware } from '@/types'
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'

export function printUrlMiddleware(middleware: CustomNextMiddleware): CustomNextMiddleware {
  return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    const url = request.url
    console.log('printMiddleware => ', { url })

    return middleware(request, event, response)
  }
}

export default printUrlMiddleware

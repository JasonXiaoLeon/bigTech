import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'zh', 'zhhant', 'th'],

    defaultLocale: 'en',
})

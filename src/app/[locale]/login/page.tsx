import React from 'react'
import { useTranslations } from 'next-intl'
const page = () => {
    const t = useTranslations()
    
    return <div>
        {t('login.info')}
    </div>
}

export default page

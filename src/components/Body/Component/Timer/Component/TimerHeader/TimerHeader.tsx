import React from 'react'
import { useTranslations } from 'next-intl'

const TimerHeader = () => {
    const t = useTranslations()

    return (
        <div className="mb-[15px] h-[31.195px]">
            <h2 className="flex justify-center text-[26px] text-white font-bold w-full">
                {t('timerHeader.startMessage')}
            </h2>
        </div>
    )
}

export default TimerHeader

import React from 'react'
import { useTranslation } from 'react-i18next'

const TimerHeader = () => {
    const { t } = useTranslation()

    return (
        <div className="mb-[15px] h-[31.195px]">
            <h2 className="flex justify-center text-[26px] text-white font-bold w-full">
                {t('timerHeader.startMessage')}
            </h2>
        </div>
    )
}

export default TimerHeader

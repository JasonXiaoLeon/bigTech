import React from 'react'
import { useTranslation } from 'react-i18next'

const GoalBar = () => {
    const { t, i18n } = useTranslation()
    const progress: number = 75
    const textSizeClass = i18n.language === 'th' ? 'text-[13px]' : 'text-[15px]'

    return (
        <div className="mt-[8px] w-[360px] md:w-[690px] lg:w-[710px] xl:w-[711.66px]">
            <div className="w-full h-[6px] mb-[25px] bg-gray-200 rounded-full overflow-visible relative">
                <div
                    className="h-full bg-blue-500 transition-all duration-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="h-full w-full bg-[#00c4f4]" />
                    <div
                        className="absolute right-[12.5px] top-1/2 
                            w-[25px] h-[25px] bg-white rounded-full 
                            border-[6px] border-[#00c4f4]
                            shadow-md
                            transform translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>

            <div className={`flex justify-between ${textSizeClass}`}>
                <div className="text-left text-white font-bold">
                    {progress}% {t('goalBar.targetRaised')}
                </div>
                <div className="text-right text-white font-bold">{t('goalBar.ethToCic')}</div>
            </div>
        </div>
    )
}

export default GoalBar

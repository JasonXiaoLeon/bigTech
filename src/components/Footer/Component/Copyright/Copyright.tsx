import React from 'react'
import { useTranslation } from 'react-i18next'
import TermBtn from './Component/termBtn'

const Copyright = () => {
    const { t } = useTranslation()

    const list = [
        { value: t('copyright.terms'), url: '/terms' },
        { value: t('copyright.privacy'), url: '/privacy-policy' },
        { value: t('copyright.login_signup'), url: '/login' },
    ]

    return (
        <div className="flex flex-col items-center lg:flex-row py-[18px] lg:py-[27px] text-center lg:flex lg:justify-between border-t border-[hsla(0,0%,100%,0.1)]">
            <div className="flex justify-center mb-[5px] w-[360px] md:w-[690px] md:px-[15px] lg:w-[450px] xl:w-[595px] lg:mx-[-15px]">
                <span className="w-full lg:block text-[15px] font-normal text-white leading-[1.75] lg:text-left">
                    {t('copyright.text')}
                </span>
            </div>
            <div className="hidden md:flex md:flex-row flex items-center justify-center mx-[-20px] xl:mx-[-30px]">
                {list.map((item, index) => (
                    <TermBtn key={index} value={item.value} url={item.url} />
                ))}
            </div>
        </div>
    )
}

export default Copyright
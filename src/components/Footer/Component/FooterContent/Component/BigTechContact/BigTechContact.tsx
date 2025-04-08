import React from 'react'
import { useTranslations } from 'next-intl'
import RoundedImg from '@/components/RoundedImg'

const BigTechContact = () => {
    const t = useTranslations()

    const list = [
        { url: '/img/icon/Youtube-fill.png', borderColor: '#719ed6' },
        { url: '/img/icon/twiter.png', borderColor: '#719ed6' },
        { url: '/img/icon/Facebook.png', borderColor: '#719ed6' },
        { url: '/img/icon/skype-fill.png', borderColor: '#719ed6' },
    ]

    return (
        <div className="mb-[30px] xl:mb-[0px] w-[360px] lg:w-[320px] xl:w-[312.5px] md:px-[15px] lg:px-[0px] xl:px-[15px]">
            <a href="#">
                <img src="/img/header.png" alt="" className="w-[140px] h-[83px] mb-[20px]" />
            </a>
            <p className="h-[78px] text-[15px] text-[#a4b4c3] font-normal mb-[25px] leading-[26px] lg:w-[290px] xl:w-[282.5px]">
                {t('footer.bigtech.description')}
            </p>
            <div className="flex ml-[-7px]">
                {list.map((item, index) => (
                    <RoundedImg key={index} imgUrl={item.url} borderColor={item.borderColor} />
                ))}
            </div>
        </div>
    )
}

export default BigTechContact

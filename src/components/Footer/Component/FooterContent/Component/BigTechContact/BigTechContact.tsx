import RoundedImg from '@/components/RoundedImg'
import React from 'react'

const BigTechContact = () => {
    const list = [
        { url: '/img/icon/Youtube-fill.png', borderColor: '#719ed6' },
        { url: '/img/icon/twiter.png', borderColor: '#719ed6' },
        { url: '/img/icon/Facebook.png', borderColor: '#719ed6' },
        { url: '/img/icon/skype-fill.png', borderColor: '#719ed6' },
    ]

    return (
        <div className="mb-[30px] xl:mb-[0px] w-[360px] lg:w-[320px] xl:w-[312.5px] md:px-[15px] lg:px-[0px] xl:px-[15px]">
            <a href='#'>
                <img src="/img/header.png" alt="" className="w-[140px] h-[83px] mb-[20px]" />
            </a>
            <p className="text-[15px] text-[#a4b4c3] font-normal mb-[25px] leading-[26px] lg:w-[290px] xl:w-[282.5px]">
                A new way to make the payments easy, reliable and 100% secure. claritatem itamconse
                quat. Exerci tationulla
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

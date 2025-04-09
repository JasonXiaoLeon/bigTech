import React from 'react'
import FooterListItem from './Component/FooterListItem/FooterListItem'
import { FooterContentProp } from '@/types'

const FooterListBlock: React.FC<FooterContentProp> = ({ title, value }) => {
    return (
        <div className="mb-[30px] md:px-[15px]">
            <div className="uppercase mt-[25px] mb-[27px] text-[18px] text-white font-bold leading-[1.2] tracking-[0.05em]">
                {title}
            </div>
            <div className="text-[15px] text-[#a4b4c3] leading-[1.467]">
                {value.map((item, index) => (
                    <FooterListItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default FooterListBlock

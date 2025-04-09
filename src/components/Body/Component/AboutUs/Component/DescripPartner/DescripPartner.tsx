import React from 'react'
import { PartnerProps } from '@/types'

const DescripPartner: React.FC<PartnerProps> = ({ index, partnerName }) => {
    return (
        <div className="flex items-center justify-center border border-[hsla(0,0%,100%,0.06)] w-[360px] md:w-[230px] lg:w-[232.5px] xl:w-[244px] h-[123px] bg-[#030b15] shadow-md hover:shadow-lg transition-shadow relative group">
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity z-20"></div>

            <img
                src={`/img/Company/download(${index}).png`}
                alt={partnerName}
                className="object-contain relative z-10"
            />
        </div>
    )
}

export default DescripPartner

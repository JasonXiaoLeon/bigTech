import React from 'react'

type PartnerProps = {
    index: number
    partnerName: string
}

const DescripPartner: React.FC<PartnerProps> = ({ index, partnerName }) => {
    return (
        <div className="flex items-center justify-center border border-[hsla(0,0%,100%,0.06)] w-[360px] md:w-[232.5px] lg:w-[230px] xl:w-[244px] h-[123px] bg-[#030b15] shadow-md hover:shadow-lg transition-shadow relative group">
            {/*遮罩层*/}
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity z-20"></div>

            {/* 你的图片 */}
            <img
                src={`/img/Company/download(${index}).png`}
                alt={partnerName}
                className="object-contain relative z-10"
            />
        </div>
    )
}

export default DescripPartner

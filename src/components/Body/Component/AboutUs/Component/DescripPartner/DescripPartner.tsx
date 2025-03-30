import React from 'react'

type PartnerProps = {
  index: number
  partnerName: string
}

const DescripPartner: React.FC<PartnerProps> = ({ index, partnerName }) => {
  return (
    <div className="flex items-center justify-center w-[360px] md:w-[232.5px] lg:w-[230px] xl:w-[244px] h-[123px] bg-[#030b15] shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={`/img/Company/download(${index}).png`}
        alt={partnerName}
        className="object-contain relative z-10"
      />
    </div>
  )
}

export default DescripPartner

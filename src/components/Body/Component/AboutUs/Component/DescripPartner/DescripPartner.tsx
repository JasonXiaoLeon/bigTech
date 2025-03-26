import React from 'react'

type PartnerProps = {
  index: number
  partnerName: string
}

const DescripPartner: React.FC<PartnerProps> = ({ index, partnerName }) => {
  return (
    <div>
      <div className="flex items-center justify-center w-[360px] md:w-[230px] lg:w-[232.5px] h-[123px] bg-[#030b15] rounded-lg shadow-md hover:shadow-lg transition-shadow group relative">
        <img 
          src={`/img/Company/download(${index}).png`}
          alt={partnerName}
          className="object-contain p-2 relative z-10"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg transition-opacity duration-300 group-hover:opacity-0 z-20" />
      </div>
    </div>
  )
}

export default DescripPartner
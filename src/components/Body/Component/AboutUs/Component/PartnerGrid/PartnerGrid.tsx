import React from 'react'
import DescripPartner from '../DescripPartner'

const PartnerGrid = () => {
  const partners = [
    'Calendly',
    'monday',
    'GitHub',
    'Quotient',
    'Lattice',
    'Trustpilot',
    'DOORDASH',
    'Sisyphus',
    'monzo',
    'Catalog'
  ]

  if (partners.length !== 10) {
    console.error('合作伙伴数量与图片数量不匹配！')
    return null
  }

  return (
    <div className="bg-[#030b15] flex justify-center">
      <div className="
          grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
          xl:grid-cols-5
          w-[360px] md:w-[690px] lg:w-[930px] xl:w-[1250px]"
        //border-x border-t border-[hsla(0,0%,100%,0.06)] 
        >
        {partners.map((partnerName, index) => (
          <div 
            key={index}
            className="
              group hover:bg-[#061220]
              transition-colors duration-300" 
              //border-b border-r border-[hsla(0,0%,100%,0.06)]
          >
            <DescripPartner
              index={index}
              partnerName={partnerName}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerGrid
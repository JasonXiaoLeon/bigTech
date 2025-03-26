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
    <div className="bg-[#030b15]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
        border-x border-t border-[hsla(0,0%,100%,0.06)]">
        
        {partners.map((partnerName, index) => (
          <div 
            key={index}
            className="
              border-b border-r border-[hsla(0,0%,100%,0.06)]
              group hover:bg-[#061220]
              transition-colors duration-300" 
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
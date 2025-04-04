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
        'Catalog',
    ]

    if (partners.length !== 10) {
        console.error('合作伙伴数量与图片数量不匹配！')
        return null
    }

    return (
        <div className="flex justify-center">
            <ul className="flex flex-wrap justify-center w-[360px] md:w-[720px] lg:w-[960px] xl:w-[1250px] px-[15px]">
                {partners.map((partnerName, index) => (
                    <li
                        key={index}
                        className="group hover:bg-[#061220] transition-colors duration-300"
                    >
                        <DescripPartner index={index} partnerName={partnerName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PartnerGrid

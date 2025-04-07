'use client'
import React from 'react'

const CurrDropdown = ({
    currentLanguage,
    handleLanguageChange
}: {
    currentLanguage: string
    handleLanguageChange: (lng: string, label: string) => void
}) => {
    const currList = [
        { label: 'ENG', value: 'en' },
        { label: 'ZH', value: 'zh' },
        { label: 'ZH-HK', value: 'zhhant' },
        { label: 'TH', value: 'th' },
    ]

    const filteredList = currList.filter(currency => currency.label !== currentLanguage)

    return (
        <div className="relative">
            <div className="bg-[#0b1d33] py-[10px] absolute rounded-[6px] shadow-[0_30px_70px_0_rgba(40,44,49,.15)] xl:w-[100px] left-[-10px] top-[25px]">
                <ul>
                    {filteredList.map((currency, index) => (
                        <li
                            key={index}
                            onClick={() => handleLanguageChange(currency.value, currency.label)}
                            className="flex uppercase items-center text-white font-[700] w-[100px] px-[15px] py-[5px] mb-[5px] last:mb-0 text-[15px] tracking-[1px] leading-[1] hover:text-[#00C4F4] cursor-pointer transition-colors duration-300 ease-in-out"
                        >
                            {currency.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CurrDropdown

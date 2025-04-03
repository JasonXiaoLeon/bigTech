import React from 'react'

const CurrDropdown = () => {
    const currList = ['IND', 'BNG', 'TUR', 'CIN']
    return (
        <div className="relative">
            <div className="bg-[#0b1d33] py-[10px] absolute rounded-[6px] shadow-[0_30px_70px_0_rgba(40,44,49,.15)] xl:w-[100px] left-[-10px] top-[25px]">
                <ul>
                    {currList.map((currency, index) => (
                        <li
                            key={index}
                            className="flex uppercase items-center text-white w-[100px] px-[15px] py-[5px] mb-[5px] last:mb-0 text-[15px] tracking-[1px] leading-[1]"
                        >
                            {currency}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CurrDropdown

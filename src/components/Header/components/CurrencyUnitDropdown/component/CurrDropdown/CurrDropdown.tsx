import React from 'react'

const CurrDropdown = () => {
    const currList = ['IND', 'BNG', 'TUR', 'CIN']
    return (
        <div className="bg-[#0b1d33] p-[10px] absolute rounded-md shadow-[0_30px_70px_0_rgba(40,44,49,.15)] min-w-[100px] top-[80px]">
            <ul>
                {currList.map((currency, index) => (
                    <li
                        key={index}
                        className="flex items-center text-white w-[100px] h-[25px] p-[15px] text-sm"
                    >
                        {currency}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CurrDropdown

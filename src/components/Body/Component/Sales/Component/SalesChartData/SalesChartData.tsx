import React from 'react'

const SalesChartData = () => {
    const countries = [
        {
            items: [
                { title: 'Contingency:', data: ' 70%', color: 'bg-[#005f73]' },
                { title: 'Business Development:', data: ' 10%', color: 'bg-[#f72585]' },
                { title: 'Investor:', data: ' 30%', color: 'bg-[#5dd400]' },
                { title: 'Poland', data: '', color: 'bg-[#ff9700]' },
                { title: 'Legal & Regulation:', data: ' 10%', color: 'bg-[#00c4f4]' },
                { title: 'Czech Republic', data: '', color: 'bg-[#007ff4]' },
            ],
        },
    ]

    return (
        <div className="">
            {countries.map((country, index) => (
                <div key={index}>
                    {country.items.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2">
                            {country.items.map((item) => (
                                <li key={item.title} className="flex items-center mb-[8px]">
                                    <div
                                        className={`w-[20px] h-[20px] ${item.color} rounded-full shrink-0`}
                                    ></div>
                                    <div className="flex ml-[10px] w-[280px] md:w-[220px] lg:w-[165px] xl:w-[177.5px] text-white text-[14px] font-[500] leading-[1.75]">
                                        <span className="inline-flex flex-wrap">
                                            {item.title}
                                            {item.data && item.data}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-gray-400">No data available</div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SalesChartData

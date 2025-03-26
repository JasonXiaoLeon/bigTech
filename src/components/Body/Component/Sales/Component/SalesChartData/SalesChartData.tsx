import React from 'react'

const SalesChartData = () => {
  const countries = [
    {
      items: [
        { title: "Contingency", percent: 70, color: 'bg-[#005f73]' },
        { title: "Business Development", percent: 10, color: 'bg-[#f72585]' },
        { title: "Investor", percent: 30, color: 'bg-[#5dd400]' },
        { title: "Poland", color: 'bg-[#ff9700]' },
        { title: "Legal & Regulation", percent: 10, color: 'bg-[#00c4f4]' },
        { title: "Czech Republic", color: 'bg-[#007ff4]' },
      ]
    }
  ];

  return (
    <div className="">
      {countries.map((country, index) => (
        <div key={index}>
          {country.items.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2"> 
              {country.items.map((item) => (
                <li key={item.title} className="flex items-center">
                  <div className={`w-[20px] h-[20px] ${item.color} rounded-full shrink-0`}></div>
                  <div className="flex ml-3 text-white text-[14px] font-semibold">
                    <span className="">{item.title}:</span>
                    <span className="">
                      {item.percent != null ? `${item.percent}%` : ''}
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
  );
}

export default SalesChartData;

"use client"
import React, { useState } from 'react';
import SalesAllocationPage from '../SalesAllocationPage';

const SalesAllocation = () => {
  const [selectedId, setSelectedId] = useState<string>('1');
  const allocations = [
    { id: '1', value: 'FUNDING ALLOCATION', title: '1 CNL = 0.0863 BTC', content: 'The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens' },
    { id: '2', value: 'TOKEN ALLOCATION', title: '2 CNL = 0.0967 BTC', content: 'The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens' }
  ];

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="flex justify-center md:justify-start w-full">
        {allocations.map((item) => (
          <div 
            key={item.id}
            className="relative cursor-pointer mb-[35px] md:mb-[50px]"
            onClick={() => setSelectedId(item.id)}
          >
            <div className="px-[15px] pb-[10px] h-[26.26px] inline-block">
              <button className={`text-[15px] uppercase leading-7 font-bold text-white whitespace-nowrap`}>
                {item.value}
              </button>
            
              <div 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-1 transition-all duration-300 ${
                  selectedId === item.id ? 'bg-[#00c4f4]' : 'bg-transparent'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      
      {allocations.map((item) => (
        selectedId === item.id && (
          <SalesAllocationPage 
            key={item.id}
            title={item.title}
            content={item.content}
          />
        )
      ))}
    </div>
  );
}

export default SalesAllocation;

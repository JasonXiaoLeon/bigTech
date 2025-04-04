'use client'
import React, { useState } from 'react'
import SalesAllocationPage from '../SalesAllocationPage'
import NormalBtn from '@/components/Button/NormalBtn/NormalBtn'

const SalesAllocation = () => {
    const [selectedId, setSelectedId] = useState<string>('1')
    const allocations = [
        {
            id: '1',
            value: 'FUNDING ALLOCATION',
            title: '1 CNL = 0.0863 BTC',
            content:
                'The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens',
        },
        {
            id: '2',
            value: 'TOKEN ALLOCATION',
            title: '2 CNL = 0.0967 BTC',
            content:
                'The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens',
        },
    ]

    return (
        <div className="flex flex-col items-start">
            <div className="flex justify-center md:justify-start">
                {allocations.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative cursor-pointer mb-[35px] md:mb-[50px] ${index === 0 ? 'ml-[-15px]' : 'ml-0'}`}
                        onClick={() => setSelectedId(item.id)}
                    >
                        <div className="pb-[10px] inline-block px-[15px] md:px-[20px] md:pb-[0px]">
                            <button
                                className={`text-[15px] uppercase leading-[1.75] font-[700] text-white whitespace-nowrap`}
                            >
                                {item.value}
                            </button>

                            <div
                                className={`absolute bottom-[10px] md:bottom-[-1px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] md:w-[calc(100%-40px)] h-1 transition-all duration-300 ${
                                    selectedId === item.id ? 'bg-[#00c4f4]' : 'bg-transparent'
                                }`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {allocations.map(
                (item) =>
                    selectedId === item.id && (
                        <SalesAllocationPage
                            key={item.id}
                            title={item.title}
                            content={item.content}
                        />
                    )
            )}
            <NormalBtn
                value={'BUY NOW'}
                widthType={3}
                color="#00c4f4"
                height="59px"
                fontWeight="700"
                textHoverColor='white'
            />
        </div>
    )
}

export default SalesAllocation

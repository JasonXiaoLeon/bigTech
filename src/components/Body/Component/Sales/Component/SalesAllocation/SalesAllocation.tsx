'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import SalesAllocationPage from '../SalesAllocationPage'
import NormalBtn from '@/components/Button/NormalBtn/NormalBtn'

const SalesAllocation = () => {
    const t = useTranslations()

    const [selectedId, setSelectedId] = useState<string>('1')
    const allocations = [
        {
            id: '1',
            value: t('salesAllocation.fundingAllocation'),
            title: t('salesAllocation.title1'),
            content: t('salesAllocation.content1'),
        },
        {
            id: '2',
            value: t('salesAllocation.tokenAllocation'),
            title: t('salesAllocation.title2'),
            content: t('salesAllocation.content2'),
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
                value={t('salesAllocation.buyNow')}
                widthType={3}
                color="#00c4f4"
                height="59px"
                fontWeight="700"
                textHoverColor="white"
            />
        </div>
    )
}

export default SalesAllocation

import React, { useEffect, useState } from 'react'
import { TitleContentProps } from '@/types'

const SalesAllocationPage: React.FC<TitleContentProps> = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div
            className={`flex flex-col w-full lg:w-[480px] md:mt-[0px] transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="md:w-[570px] lg:w-[360px] xl:w-[363.75px] mb-[20px] xl:mb-[35px] text-[40px] tracking-[-0.01em] md:text-[45px] xl:text-[55px] text-white leading-[1.2] font-bold">
                {title}
            </div>
            <p className="md:w-[570px] lg:w-[360px] xl:w-[363.75px] mb-[30px] lg:mb-[45px] text-[#a4b4c3] text-[16px] font-normal leading-[1.75]">
                {content}
            </p>
        </div>
    )
}

export default SalesAllocationPage

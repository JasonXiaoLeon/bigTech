import DescripHeader from '@/components/Body/Component/AboutUs/Component/DescripHeader/DescripHeader'
import React from 'react'

interface props {
    title: string
    content1?: string
    content2?: string
    blueContent?: string
    afterBlueContent?: string
    enter?: boolean
}

const RoadMapUpperPart: React.FC<props> = ({
    title,
    content1,
    content2,
    blueContent,
    afterBlueContent,
}) => {
    return (
        <div className="flex justify-center w-screen">
            <div className=" w-[390px] md:w-[750px] lg:w-[960px] xl:w-[1250px] px-[15px]">
                <div className="mb-[70px]">
                    <div className="flex justify-center">
                        <DescripHeader content={title} />
                    </div>
                    <div className="text-[28px] md:text-[40px] tracking-[-0.01em] lg:text-[34px] xl:text-[42px] leading-[1.2] flex justify-center text-white font-bold">
                        <h2 className="md:block">
                            {content1}
                            <span className="md:flex md:justify-center">
                                {content2}
                                <span className="text-[#00c4f4] md:block md:text-center">
                                    {blueContent}
                                </span>
                                <span>{afterBlueContent}</span>
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMapUpperPart

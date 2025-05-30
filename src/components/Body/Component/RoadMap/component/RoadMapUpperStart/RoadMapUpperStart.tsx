import DescripHeader from '@/components/Body/Component/AboutUs/Component/DescripHeader/DescripHeader'
import React from 'react'
import { DescripBlockProps } from '@/types'

const RoadMapUpperStart: React.FC<DescripBlockProps> = ({
    title,
    content1,
    blueContent,
    marginBottom,
}) => {
    return (
        <div className="flex md:justify-center">
            <div className="flex justify-center w-[390px] md:w-[750px] lg:w-[400px] xl:w-[490px]">
                <div
                    className={`w-[360px] md:w-[390px] lg:w-[370px] xl:w-[490px] mb-[${marginBottom}]`}
                >
                    <div className="flex ml-[-15px]">
                        <DescripHeader content={title} />
                    </div>
                    <div className="text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] leading-[1.2] md:h-[96px] lg:h-[81.6px] xl:h-[100.8px] flex justify-center text-white font-bold lg:w-[270.13px] xl:w-[333.69px]">
                        <h2>
                            {content1}
                            <span className="text-[#00c4f4]">{blueContent}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMapUpperStart

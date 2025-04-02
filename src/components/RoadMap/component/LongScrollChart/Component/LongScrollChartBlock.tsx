import { hexToRgb } from '@/components/Utils/Component/hexToRgb/hexToRgb'
import React from 'react'

interface Props {
    date: string
    textColor: string
    title: string
    content: string[]
    isOdd: boolean
}

const LongScrollChartBlock: React.FC<Props> = ({ date, textColor, title, content, isOdd }) => {
    return (
        <div className="w-[370px]">
            {isOdd ? (
                <>
                    <div className="mt-[185px] mb-[32.91px]">
                        <div
                            className="uppercase w-full mb-[22px] text-[14px] font-[700] tracking-[0.1em] leading-[1.75]"
                            style={{ color: textColor }}
                        >
                            {date}
                        </div>
                        <div
                            className="w-[313px] pt-[110px] pl-[17px] ml-[57px] relative"
                            style={{ borderLeft: `1px solid ${textColor}` }}
                        >
                            <div>
                                <h4 className="text-white text-[18px] mb-[10px] font-[500] leading-[1.2]">
                                    {title}
                                </h4>
                                <ul>
                                    {content.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-[16px] text-[#a4b4c3] font-[400] leading-[1.75]"
                                        >
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute top-[-8px] left-[-16px]">
                                <div
                                    className="flex justify-center items-center w-[32px] h-[32px] rounded-full"
                                    style={{ backgroundColor: `rgba(${hexToRgb(textColor)}, 0.1)` }}
                                >
                                    <div
                                        className="w-[16px] h-[16px] rounded-full"
                                        style={{ backgroundColor: textColor }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-[185px] mt-[22.91px]">
                        <div
                            className="w-[313px] pb-[110px] pl-[17px] ml-[57px] relative"
                            style={{ borderLeft: `1px solid ${textColor}` }}
                        >
                            <div>
                                <h4 className="text-white text-[18px] mb-[10px] font-[500] leading-[1.2]">
                                    {title}
                                </h4>
                                <ul>
                                    {content.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-[16px] text-[#a4b4c3] font-[400] leading-[1.75]"
                                        >
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute bottom-[-8px] left-[-16px]">
                                <div
                                    className="flex justify-center items-center w-[32px] h-[32px] rounded-full"
                                    style={{ backgroundColor: `rgba(${hexToRgb(textColor)}, 0.1)` }}
                                >
                                    <div
                                        className="w-[16px] h-[16px] rounded-full"
                                        style={{ backgroundColor: textColor }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="uppercase w-full mt-[22px] text-[14px] font-[700] tracking-[0.1em] leading-[1.75]"
                            style={{ color: textColor }}
                        >
                            {date}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default LongScrollChartBlock

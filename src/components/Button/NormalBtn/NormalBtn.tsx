import React from 'react'

interface Props {
    value: string
    textSize?: string
    widthType?: number
    color?: string
    height?: string
    fontWeight?: string
    textHoverColor?: string
}

const NormalBtn: React.FC<Props> = ({
    value,
    textSize = '13px',
    widthType = 0,
    color = '#0b1d33',
    height,
    fontWeight = '700',
    textHoverColor = '#00c4f4',
}) => {
    const widthList = ['179.48px', '190.23px', '204.7px', '168.59px']

    return (
        <div className="flex justify-center items-center">
            <button
                className={`flex justify-center items-center rounded-[70px] text-white uppercase h-[55px] bg-[${color}] shadow-lg border-2 border-[#00c4f4] text-[${textSize}] font-[${fontWeight}] hover:text-[var(--hover-color)] transition-colors duration-300`}
                style={
                    {
                        width: widthList[widthType],
                        height,
                        '--hover-color': textHoverColor,
                    } as React.CSSProperties
                }
            >
                {value}
            </button>
        </div>
    )
}

export default NormalBtn

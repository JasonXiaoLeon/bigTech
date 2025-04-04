import React from 'react'

interface props {
    imgUrl: string
    borderColor?: string
}

const RoundedImg: React.FC<props> = ({ imgUrl, borderColor }) => {
    return (
        <div className="w-[58px] px-[7px]">
            <div
                className={`flex justify-center items-center rounded-full w-[44px] h-[44px] border-2 hover:bg-[#00c4f4] cursor-pointer`}
                style={{ borderColor }}
            >
                <img src={imgUrl} alt="" className={`w-[18px] h-[18px]`} />
            </div>
        </div>
    )
}

export default RoundedImg

import React from 'react'

interface ChooseItemProps {
    url: string
    name: string
    content: string
}

const ChooseItem: React.FC<ChooseItemProps> = ({ url, name, content }) => {
    return (
        <div className="w-[330px] h-[382px] md:w-[320px] lg:w-[287px] xl:w-[283px] text-white bg-[#030b15] px-[35px] py-[50px] border-2 border-[hsla(0,0%,100%,0.06)] rounded-[15px] mb-[30px]">
            <div className="flex justify-center items-center w-[80px] h-[80px] border-4 border-[hsla(0,0%,100%,0.06)] rounded-full mb-[30px]">
                <img src={url} alt={name} className="w-[38px] h-[38px]" />
            </div>
            <h2 className="text-[22px] font-[500] leading-[1.27] mb-[24px]">{name}</h2>
            <p className="text-[#a4b4c3] text-[15px] leading-[22px] font-[400]">{content}</p>
        </div>
    )
}

export default ChooseItem

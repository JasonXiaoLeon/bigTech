import React from 'react'

interface Props {
    title: string
    value: string[]
}

const FooterListBlock: React.FC<Props> = ({ title, value }) => {
    return (
        <div className="mb-[30px] md:px-[15px]">
            <div className="uppercase mt-[25px] mb-[27px] text-[18px] text-white font-bold leading-[1.2] tracking-[0.05em]">
                {title}
            </div>
            <div className="text-[15px] text-[#a4b4c3] leading-[1.467]">
                {value.map((item, index) => (
                    <div key={index} className="relative mb-[10px] last:mb-0">
                        <a
                            href="#"
                            className="inline-block hover:text-white relative overflow-hidden cursor-pointer group"
                        >
                            <span>{item}</span>
                            <span className="absolute bottom-0 left-0 block h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FooterListBlock

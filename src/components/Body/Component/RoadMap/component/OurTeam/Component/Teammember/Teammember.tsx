import React from 'react'
import SocialMediaIcon from '../SocialMediaIcon'

interface props {
    imgUrl: string
    name: string
    jobTitle: string
}

const Teammember: React.FC<props> = ({ imgUrl, name, jobTitle }) => {
    return (
        <div className="flex justify-center px-[15px] w-screen md:w-[240px] lg:w-[320px] xl:w-[312.5px]">
            <div className="w-[360px] md:w-[210px] lg:w-[227px] mb-[60px] text-white flex flex-col items-center group">
                <div className="relative flex justify-center items-center w-[360px] md:w-[210px] lg:w-[227px] h-[360px] md:h-[210px] lg:h-[227px] mb-[30px] p-[15px]">
                    <div className="absolute w-[222px] h-[222px] border-[2px] border-[#00c4f4] border-dashed rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-fast transition-all duration-300"></div>
                    <img
                        src={imgUrl}
                        loading="lazy"
                        className="w-[197px] h-[197px] md:w-[180px] md:h-[180px] lg:w-[197px] lg:h-[197px] rounded-full absolute group-hover:filter-none group-hover:grayscale-0 filter grayscale transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="mb-[8px] lg:mb-[10px] text-center text-[19px] lg:text-[22px] font-[500] leading-[1.2]">
                        {name}
                    </h2>
                    <span className="mb-[10px] text-[16px] text-[#a4b4c3] leading-[1.75]">
                        {jobTitle}
                    </span>
                    <div className="flex justify-center items-center h-[28px]">
                        <SocialMediaIcon type="youtube" size="13" />
                        <SocialMediaIcon type="twitter" size="13" />
                        <SocialMediaIcon type="facebook" size="13" />
                        <SocialMediaIcon type="ins" size="13" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teammember

import React from 'react'
import SocialMeidaIcon from '../SocialMediaIcon'

interface props {
  imgUrl: string,
  name: string,
  jobTitle: string,
}

const Teammember: React.FC<props> = ({ imgUrl, name, jobTitle }) => {
  return (
    <div className='flex justify-center px-[15px] w-screen md:w-[240px] lg:w-[320px] xl:w-[312.5px]'>
      <div className='w-[360px] md:w-[210px] lg:w-[290px] xl:w-[282.5px] mb-[60px] text-white flex flex-col items-center group'>
        <div className='relative flex justify-center items-center w-[227px] h-[227px] mb-[30px]'>
          <div className='absolute top-0 w-[227px] h-[227px] p-[15px] border-[2px] border-[#00c4f4] border-dashed rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-fast transition-all duration-300'>
          </div>
          <img 
            src={imgUrl} 
            className='w-[197px] h-[197px] md:w-[180px] md:h-[180px] lg:w-[197px] lg:h-[197px] rounded-full absolute group-hover:filter-none group-hover:grayscale-0 filter grayscale transition-all duration-300' 
          />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='mb-[8px] text-center text-[19px]'>
            {name}
          </h2>
          <span className='mb-[10px] text-[16px] text-[#a4b4c3]'>
            {jobTitle}
          </span>
          <div className='flex justify-center items-center h-[28px]'>
            <SocialMeidaIcon url='/img/icon/Youtube-fill.png' height={'13px'} />
            <SocialMeidaIcon url='/img/icon/twiter.png' height={'13px'} />
            <SocialMeidaIcon url='/img/icon/Facebook.png' height={'13px'} />
            <SocialMeidaIcon url='/img/icon/instagram.png' height={'13px'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teammember

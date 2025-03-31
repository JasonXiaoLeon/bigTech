import React from 'react'
import BodyText from './Component/BodyText/BodyText'
import Goal from './Component/Goal'
import GoalBar from './Component/Goal/Component/GoalLabel/GoalBar'
import Timer from './Component/Timer'

const Body = () => {
  return (
    <div      
    id="home"
    className="bg-cover bg-center pt-[75px] md:pt-[120px]"
    style={{   
      backgroundImage: "url('/img/banner_bg.jpg')"
    }}
    >
{/* 
      <div className="absolute inset-0 z-10 min-w-screen min-h-screen" 
        style={{
          backgroundImage: "linear-gradient(0.23deg, rgb(3, 11, 21) 5.68%, rgba(3, 11, 21, 0.42) 81.9%)",
          opacity: 0.9,
        }}
      /> */}
      <div className='absolute w-screen'>
        <img className='absolute top-[-45px] md:top-[-95px] lg:top-[75px] xl:top-[85px] w-[100px] md:w-[120px] lg:w-[169px] h-[100px] md:h-[120px] lg:h-[169px] animate-left-right' src='/img/banner1.png' alt='sphere'/>
        <img className='absolute lg:right-[-15px] lg:top-[75px] w-[100px] md:w-[120px] lg:w-[146px] h-[100px] md:h-[120px] lg:h-[146px] animate-top-down' src='/img/banner1.png' alt='sphere'/>
        <img className='absolute right-[8%] top-[20%] left-auto w-[66px] h-[66px]' src='/img/banner2.png' alt='sphere'/>
      </div>
      <div className="relative z-20 w-[360px] md:w-[690px] lg:w-[770px] xl:w-[1011.66px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/img/download.png" 
            className="w-[52px] h-[52px] mb-[25px]" 
          />
          <BodyText />
        </div>
        <div className='flex flex-col items-center mb-[40px] lg:mx-[30px] lg:mb-[60px] xl:mx-[150px] xl:mb-[70px]'>
          <Goal/>
          <GoalBar/>
        </div>
        <div className=''>
          <Timer/>
        </div>
      </div>
    </div>
  )
}

export default Body

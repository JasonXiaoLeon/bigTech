import React from 'react'
import BodyText from './Component/BodyText/BodyText'
import Goal from './Component/Goal'
import GoalBar from './Component/Goal/Component/GoalLabel/GoalBar'
import Timer from './Component/Timer'

const Body = () => {
  return (
    <div      
    id="home"
    className="bg-cover bg-center"
    style={{   
      backgroundImage: "url('/img/banner_bg.jpg')"
    }}
    >

      <div className="absolute inset-0 z-10 min-w-screen min-h-screen" 
        style={{
          backgroundImage: "linear-gradient(0.23deg, rgb(3, 11, 21) 5.68%, rgba(3, 11, 21, 0.42) 81.9%)",
          opacity: 0.9,
        }}
      />
      
      <div className="relative z-20">
        <img className='absolute' src='/img/banner1.png' alt='sphere'/>
        <img className='absolute' src='/img/banner2.png' alt='sphere'/>
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/img/download.png" 
            className="w-[54px] h-[54px] mb-[25px] widthSmall:w-auto widthSmall:h-auto" 
          />
          <BodyText />
        </div>
        <div className='flex flex-col items-center mx-[150px] mb-[70px]'>
          <Goal/>
          <GoalBar/>
        </div>
        <div className='flex items-center'>
          <Timer/>
        </div>
      </div>
    </div>
  )
}

export default Body

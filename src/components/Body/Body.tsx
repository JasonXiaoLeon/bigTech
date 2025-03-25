import React from 'react'
import BodyText from './Component/BodyText/BodyText'
import Container from '../Container'
import Goal from './Component/Goal'
import GoalBar from './Component/Goal/Component/GoalLabel/GoalBar'

const Body = () => {
  return (
    <div      
    id="home"
    className="bg-cover bg-center pt-[120px]"
    style={{   
      backgroundImage: "url('/img/banner_bg.jpg')"
    }}
    >

      <div className="absolute inset-0 z-10" 
        style={{
          backgroundImage: "linear-gradient(0.23deg, rgb(3, 11, 21) 5.68%, rgba(3, 11, 21, 0.42) 81.9%)",
          opacity: 0.9,
        }}
      />
      
      <div className="relative z-20">
        <img className='absolute' style={{animation: "leftToRight 5s linear infinite"}} src='/img/banner1.png' alt='sphere'/>
        <img className='absolute' src='/img/banner2.png' alt='sphere'/>
        <Container margin="auto" padding="15px" width='1220px' height='611.195px'>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/img/download.png" 
              className="w-[54px] h-[54px] mb-[25px] widthSmall:w-auto widthSmall:h-auto" 
            />
            <BodyText />
          </div>
          <div className='flex flex-col items-center'>
            <Goal/>
            <GoalBar/>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Body

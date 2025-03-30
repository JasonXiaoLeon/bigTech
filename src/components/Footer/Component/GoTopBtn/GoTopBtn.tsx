"use client"
import React from 'react'

const GoTopBtn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='relative flex justify-center items-center w-full'>
      <div className="absolute w-full h-[2px] bg-[#1f262f] opacity-70" />
      <button onClick={handleScrollToTop} className="group">
        <div className='relative flex justify-center items-center bg-[#030b15] w-[66px] h-[66px] rounded-full border border-[#1f262f] z-10'>
          <div className="absolute w-full h-full bg-[#030b15] rounded-full transition-all duration-300 group-hover:bg-[#0dcaf0]" />

          <img 
            src='/img/icon/arrow-up.png' 
            alt='' 
            className='w-[18.75px] h-[20.75px] z-10' 
          />
        </div>              
      </button>
    </div>
  )
}

export default GoTopBtn

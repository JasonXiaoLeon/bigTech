import React from 'react'
import DescripHeader from '../DescripHeader/DescripHeader'
import Button from '@/components/Button/Button'

const DescriptionOfAbout = () => {
  return (
    <div className='md:px-[15px]'>
      <div className='md:ml-[30px] xl:ml-[55px] mb-[30px]'>
        <div className='relative left-[-15px]'>
          <DescripHeader content='Who we are'/>
        </div>
        <div className='text-white text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] font-bold leading-[1.2]'>
            <span>The World’s <span className='text-[#00c4f4]'> 1st ICO </span> Platform That Offers Rewards</span>
        </div> 
      </div>
      
      <div className='md:ml-[30px] xl:ml-[55px] text-[#a4b4c3] font-normal mb-[40px] w-[360px] md:w-[660px] lg:w-[357px] xl:w-[394.2px] leading-[1.75]'>
      The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
      </div>
      <div className='md:ml-[30px] xl:ml-[55px] h-[55px] w-[204.7px]'>
        <Button value='purchase tokens' color='white'/>
      </div>
    </div>
  )
}

export default DescriptionOfAbout

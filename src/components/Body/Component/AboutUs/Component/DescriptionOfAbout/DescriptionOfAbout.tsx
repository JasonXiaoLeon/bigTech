import React from 'react'
import DescripHeader from '../DescripHeader/DescripHeader'
import Button from '@/components/Button/Button'

const DescriptionOfAbout = () => {
  return (
    <div className='px-[15px] md:ml-[30px]'>
      <div className='mb-[30px]'>
        <DescripHeader content='Who we are'/>
        <div className='text-white text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] font-bold leading-[1.2]'>
            <span>The World’s <span className='text-[#00c4f4]'> 1st ICO </span> Platform That Offers Rewards</span>
        </div> 
      </div>
      
      <div className='text-[#a4b4c3] font-normal mb-[40px]'>
      The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
      </div>
      <div className='h-[55px] w-[204.7px]'>
        <Button value='purchase tokens' color='white'/>
      </div>
    </div>
  )
}

export default DescriptionOfAbout

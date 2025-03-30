import React from 'react'
import GoTopBtn from './Component/GoTopBtn'
import CopyRight from './Component/Copyright'
import FooterContent from './Component/FooterContent'

const Footer = () => {
  return (
    <div className='flex justify-center px-[15px] bg-[#030b15]'>
      <div className='md:mx-[24px] w-[360px] md:w-[690px] lg:w-[930px] xl:w-[1220px]'>
        <GoTopBtn/>
        <FooterContent/>
        <CopyRight/>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import DescriptionOfAbout from './Component/DescriptionOfAbout'
import DescripHeader from './Component/DescripHeader/DescripHeader'
import PartnerGrid from './Component/PartnerGrid'
import ChooseItemlist from './Component/ChooseItemlist'

const AboutUs = () => {
  return (
    <div className='w-screen h-auto bg-[#030b15]'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-center py-[120px] w-screen'>
          <div className='flex justify-center px-[15px] mb-[50px] lg:pl-[20px]'>
              <img src='/img/banner2.png' alt='i' className='absolute w-[64px] h-[64px] hidden md:block'/>
              <img src='/img/about_img.png' alt='img' className='w-[360px] h-[360px] md:w-[487px] md:h-[486px] lg:w-[430px] lg:h-[430px] xl:w-[475px] xl:h-[475px]'/>
          </div> 
          <div className='md:mx-[24px] w-[360px] md:w-[720px] lg:w-[480px]'>
            <DescriptionOfAbout/>
          </div>
      </div>
      <div className=''>
          <div className='flex flex-col'>
              <div className='flex items-center justify-center mb-[10px] w-full h-[52px]'>
                  <div className='flex justify-center mb-[10px] w-[360px] h-full md:w-[720px] lg:w-[480px]'>
                      <DescripHeader content='Our top partner'/>
                  </div>
              </div>
              <div className='w-full px-[15px]'>
                  <PartnerGrid/>
              </div>
          </div>
      </div>
      <div className='w-[360px] h-[604.19px] mx-auto px-[15px] bg-[##030b15] md:w-[690px] md:h-[585px] lg:w-[960px] lg:h-[578.8px] xl:w-[1250px] xl:h-[639.609px]'>
        <div className='flex flex-col items-center'>
          <div>
              <DescripHeader content='why Choose us'/>
          </div>
          <div>
            <div className='flex justify-center mb-[50px] text-white text-[28px] md:text-[40px] lg:text-[34px] xl:text-[42px] w-full font-bold leading-[1.2]'>
              <span className='text-center'>
                Why choose our Bigtech <span className='text-[#00c4f4] xl:whitespace-nowrap'> Token </span>
              </span>
            </div>
            <div>
              <ChooseItemlist/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

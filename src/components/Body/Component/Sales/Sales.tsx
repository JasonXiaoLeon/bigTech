import React from 'react'
import SalesChartData from './Component/SalesChartData'
import SalesAllocation from './Component/SalesAllocation'

const Sales = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:justify-center sm:items-center bg-[#030b15] py-[130px]'>
      <div className='bg-[#0b1d33] md:h-[530.5px] lg:h-[555px] xl:w-[485px] xl:h-[510px] rounded-[20px]'>
        <div className='flex flex-col px-[30px] px-[30px] md:px-[45px] lg:px-[30px] py-[40px] md:py-[60px] lg:w-[450px]'>
          <img src='/img/chart1.png' alt='' className='w-[238px] h-[238px] mx-auto mb-[75px]'/>
          <SalesChartData/>
        </div>
      </div>
      <div className='px-[15px]'>
        <div className='lg:w-[480px]'>
            <div className='mt-[50px] lg:mt-[0px] w-full'>
              <SalesAllocation/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sales

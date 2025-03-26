import React from 'react'
import SalesChartData from './Component/SalesChartData'
import SalesAllocation from './Component/SalesAllocation'

const Sales = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:justify-center lg:h-[815px] sm:items-center h-[1258.25px] md:h-[1135.75px] w-screen bg-[#030b15] py-[130px] px-[15px]'>
      <div className='h-[588px] bg-[#0b1d33] md:w-[570px] md:h-[530.5px] lg:h-[555px] lg:w-[960px] xl:w-[485px] xl:h-[510px] rounded-[20px] py-[40px] md:py-auto'>
        <div className='flex flex-col px-[30px] h-[530px] px-[45px]'>
          <img src='/img/chart1.png' alt='' className='w-[238px] h-[238px] mx-auto mb-[75px] mt-[20px]'/>
          <SalesChartData/>
        </div>
      </div>
      <div className='xl:h-[510.5px]'>
        <div className='flex h-[410.25px]'>
            <div className='h-[360px] mt-[50px] w-full'>
              <SalesAllocation/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sales

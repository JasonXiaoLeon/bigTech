import React from 'react'
import CurrencyUnitDropdown from '../CurrencyUnitDropdown'
import Button from '@/components/Button/Button'


const BuyButton = () => {
  return (
    <div className='flex items-center h-[86px] lg:h-[90px] ml-[10px] mr-[50px] lg:mr-[0px] hidden md:flex'>
      <div className='flex items-center'>
        <CurrencyUnitDropdown />
      </div>
      <div className='h-[20px] w-[1px] xl:ml-[35px] lg:border-l lg:border-l-[rgb(164,180,195)]' />
      <div className='flex pl-[20px] xl:pl-[35px] items-center'>
          <Button value='BUY NOW'/>
      </div>
    </div>
  )
}

export default BuyButton


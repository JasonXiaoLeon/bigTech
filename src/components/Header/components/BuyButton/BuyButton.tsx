import React from 'react'
import CurrencyUnitDropdown from '../CurrencyUnitDropdown'
import SmallNavBtn from '../HeaderNavi/components/SmallNaviBtn'

const BuyButton = () => {
  return (
    <div className='flex items-center w-[269px] ml-[10px]'>
      <div className='w-[55.91px]'>
        <CurrencyUnitDropdown />
      </div>
      <div className='w-[178.28px] pl-[35px] ml-[35px]'>
        <div className='border-l-2 border-gray-border hidden widthMid:block widthSmall:hidden'/>
        <div className='flex justify-center items-center w-[143px] h-[50px] border-2 rounded-3xl border-x-[#00c4f4] text-white hover:text-[#00c4f4] hover:border-y-[#00c4f4] border-transparent transition-all duration-400'>
          <button className='w-[111px] py-[16px] text-[16px] font-outfit font-bold'>
            BUY NOW
          </button>
        </div>
      </div>
      <SmallNavBtn />
    </div>
  )
}

export default BuyButton

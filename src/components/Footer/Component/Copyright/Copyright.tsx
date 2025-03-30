import React from 'react'
import TermBtn from './Component/termBtn'

const CopyRight = () => {
  const list = [
    { value: "Terms and conditions", url: "/terms" },
    { value: "Privacy policy", url: "/privacy-policy" },
    { value: "Login/Signup", url: "/login" }
  ]

  return (
    <div className='py-[18px] text-center lg:flex lg:justify-between'>
      <div className='mb-[5px] lg:w-[450px]'>
        <span className='text-[15px] font-normal text-white'>
          Copyright © 2022. All Rights Reserved Bigtech
        </span>
      </div>
      <div className='hidden md:flex md:flex-row flex items-center justify-center'>
        {list.map((item, index) => (
          <TermBtn key={index} value={item.value} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default CopyRight

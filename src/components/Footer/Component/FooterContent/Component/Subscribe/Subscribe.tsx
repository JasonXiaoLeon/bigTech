import React from 'react'

const Subscribe = () => {
  return (
    <div className='px-[15px] md:w-[360px] lg:w-[320px]'>
      <div className='uppercase mt-[25px] mb-[27px] text-white text-[18px]'>
        Subscribe newsletter
      </div>
      <div className='mb-[40px]'>
        <p className='text-[15px] text-[#a4b4c3] mb-[40px]'>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        </p>
        <div className='flex w-[360px] md:w-[330px] lg:w-[320px]'>
          <input placeholder='info@gmail.com' className='w-[360px] md:w-[225px] lg:w-[216px] h-[72px] bg-[hsla(240,5%,49%,0.1)] rounded-[10px] py-[23px] px-[25px] p-[80px]'/>
          <button className='flex justify-center items-center rounded-[10px] bg-[#00c4f4] w-[72px] h-[72px] px-[6px] py-[1px]'>
            <img src='/img/icon/send-fill.png' alt='' className='w-[25px] h-[25px]'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

import React from 'react'

interface props{
    value:string,
}

const NormalBtn:React.FC<props> = ({ value }) => {
  return (
    <div className='flex justify-center items-center pl-[15px]'>
        <button className='flex justify-center items-center rounded-[70px] text-white uppercase w-[179.48px] h-[55px] bg-[#0b1d33] shadow-lg border-2 border-[#00c4f4]'>
            {value}
        </button>
    </div>
  )
}

export default NormalBtn

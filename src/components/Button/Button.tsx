import React from 'react'

interface Props {
  value: string,
  color?: string,
  width?: string,
  height?:string,
}

const Button: React.FC<Props> = ({ value, color = 'text-white', width = 'auto', height='auto' }) => {
  return (
    <div className="relative group">
      <div className='flex justify-center px-[35px] py-[19px] border-2 rounded-[70px] border-[#00c4f4] text-[14px] text-white hover:text-[#00c4f4]'
         style={{ width, height }}>
        <button
          className="flex justify-center items-center uppercase text-[13px] font-outfit font-bold"
        >
          <span className={`z-10 hover:text-${color}`}>{value}</span>
        </button>
        <div className='absolute w-[70px] h-[52px] rounded-full opacity-80 group-hover:opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 border-t-4 border-b-4 border-black'/>
      </div>
    </div>
  )
}

export default Button
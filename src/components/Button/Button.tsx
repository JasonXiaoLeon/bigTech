import React from 'react'

interface Props {
  value: string
  color?: string
}

const Button: React.FC<Props> = ({ value, color = 'text-white' }) => {
  return (
    <div>
      <div className='flex px-[35px] py-[19px] h-[50px] border-2 rounded-3xl border-x-[#00c4f4] text-[14px] text-white hover:text-[#00c4f4] hover:border-y-[#00c4f4] border-transparent transition-all duration-400'>
        <button
          className={`flex justify-center items-center uppercase w-full h-full text-[13px] font-outfit font-bold ${color}`}
        >
          {value}
        </button>
      </div>
    </div>
  )
}

export default Button

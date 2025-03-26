import React from 'react'

interface Props {
  value: number
  text: string
  color: string
}

const Timecomp: React.FC<Props> = ({ value, text, color }) => {
  const formatValue = (val: number) => {
    return val < 10 ? `0${val}` : val
  }

  return (
    <div 
      className='flex flex-col border border-1 items-center justify-center rounded-[5px] p-[10px] mx-[17.5px] mt-[20px] w-[162px] h-[96px] bg-[#0b1d33]'
      style={{ 
        borderColor: 'hsla(0, 0%, 100%, 0.04)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className='mb-[12px] w-[47.23px] h-[35px]'>
        <span 
          className='flex justify-center w-[47.227px] h-[35px] text-[35px] font-mono'
          style={{ 
            color: color,
            textShadow: `0 0 8px ${color}66`
          }}
        >
          {formatValue(value)}
        </span>
      </div>
      <div>
        <span className='w-[64px] h-[35px] text-[#a4b4c3] text-[14px] font-bold tracking-wider'>
          {text.toUpperCase()}
        </span>
      </div>
    </div>
  )
}

export default Timecomp

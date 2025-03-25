import React from 'react'

const GoalBar = () => {
  const progress = 65

  return (
    <div className='mt-[8px] w-[711.664px]'>
      <div className='w-full h-[6px] mb-[25px] bg-gray-200 rounded-full overflow-visible relative'>
        <div 
          className='h-full bg-blue-500 transition-all duration-500 rounded-full relative'
          style={{ width: `${progress}%` }}
        >
          <div className='h-full w-full bg-[#00c4f4]' />
          
          <div className='absolute right-0 top-1/2 
                        w-4 h-4 bg-white rounded-full 
                        border-2 border-[#00c4f4]
                        shadow-md
                        transform translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>


      <div className='flex justify-between'>
        <div className='text-left text-[15px] text-white font-bold'>
            {progress}% TARGET RAISED
        </div>
        <div className='text-right text-[15px] text-white font-bold'>
            1 ETH = $1000 = 3177.38 CIC
        </div>
      </div>
    </div>
  )
}

export default GoalBar
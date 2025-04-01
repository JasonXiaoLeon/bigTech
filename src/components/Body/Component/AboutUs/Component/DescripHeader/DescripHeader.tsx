import React from 'react'
interface props{
    content:string,
}
const DescripHeader:React.FC<props> = ({content}) => {
  return (
    <div>
        <div className='flex items-center text-white px-[15px] mb-[25px] text-[14px] font-bold uppercase tracking-[0.09em] leading-[1.75]'>
            <div className="w-[10px] h-[10px] bg-[#00c4f4] rounded-full mr-[3px]"></div>
            {content}
            <div className="w-[10px] h-[10px] bg-[#00c4f4] rounded-full ml-[3px]"></div>
        </div>
    </div>
  )
}

export default DescripHeader

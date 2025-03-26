import React from 'react'

interface ChooseItemProps {
  url: string
  name: string
  content: string
}

const ChooseItem: React.FC<ChooseItemProps> = ({ url, name, content }) => {
  return (
    <div className="w-[330px] h-[382px] md:w-[320px] lg:w-[287px] xl:w-[283px] text-white bg-[#030b15] px-[35px] py-[50px] border border-[#a4b4c3] rounded-lg border-opacity-90">
        <div className='flex justify-center w-[80px] h-[80px]'>
            <img src={url} alt={name} className="w-[38px] h-[38px] mb-[30px] rounded-full" />
        </div>
        <h3 className="text-[22px] font-semibold mb-[24px]">{name}</h3>
        <p className="text-[#a4b4c3] text-[15px]">{content}</p>
    </div>
  )
}

export default ChooseItem

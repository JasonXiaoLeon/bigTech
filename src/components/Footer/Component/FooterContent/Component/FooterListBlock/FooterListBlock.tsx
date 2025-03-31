import React from 'react'

interface Props {
  title: string,
  value: string[],
}

const FooterListBlock: React.FC<Props> = ({ title, value }) => {
  return (
    <div className='w-[360px] xl:w-[208.33px] mb-[30px] md:px-[15px]'>
      <div className='mt-[25px] mb-[27px] text-[18px] text-white font-semibold'>
        {title}
      </div>
      <div className='mb-[10px] text-[15px] text-[#a4b4c3]'>
        {value.map((item, index) => (
          <div key={index} className="mb-[10px]">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default FooterListBlock

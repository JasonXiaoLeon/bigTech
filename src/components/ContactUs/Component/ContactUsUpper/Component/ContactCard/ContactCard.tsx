import React from 'react'

interface props{
    url?:string,
    firstLine:string,
    secondLine:string,
    borderColor:string,
}

const ContactCard:React.FC<props> = ({ url, firstLine, secondLine, borderColor }) => {
  return (
    <div className='flex justify-center h-[207px] px-[15px] w-[360px] md:w-[330px] md:h-[170px]'>
      <div className='flex flex-col items-center mb-[30px]'>
        <div className='w-[107px] h-[107px] mb-[10px] mx-auto'>
        <div
          className="flex justify-center rounded-full items-center w-[83px] h-[83px] border-2"
          style={{ borderColor: `${borderColor}` }}
        >        
              <img src={url} alt='' className='w-[28px] h-[28px] rounded-full object-contain'/>
            </div>
        </div>
        <div className='text-white text-[22px] font-bold'>
            <p>{firstLine}</p>
            <p>{secondLine}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard

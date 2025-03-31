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
        <div className='flex justify-center items-center w-[107px] h-[107px] mb-[10px] mx-auto border-[1px]  border-[hsla(0,0%,100%,.07)] border-[hsla(0,0%,100%,.07)] rounded-full'>
          <div
            className="flex justify-center rounded-full items-center w-[83px] h-[83px] border-2"
            style={{ borderColor: `${borderColor}` }}
          >        
                <img src={url} alt='' className='w-[28px] h-[28px] rounded-full object-contain'/>
              </div>
          </div>
        <div className='text-white text-[22px] font-bold'>
            <p className='text-center'>{firstLine}</p>
            <p className='text-center'>{secondLine}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard

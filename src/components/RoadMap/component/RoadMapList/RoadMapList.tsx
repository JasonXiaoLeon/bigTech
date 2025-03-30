import React from 'react'

const RoadMapList = () => {
  const list = [
    "White Paper",
    "Privacy & Policy",
    "Terms Of Coin Sale",
    "One Pager",
  ]

  return (
    <div className='flex px-[15px] md:w-[390px] md:mx-auto lg:mx-[0px] xl:w-[490px]'>
    <ul className="flex flex-col justify-center w-[360px] h-[171px] item-center mb-[40px] pl-[15px]">
      {list.map((item, index) => (
        <li 
          key={index} 
          className="text-[18px] mb-[15px] relative text-white pl-[15px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
        >
          {item}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default RoadMapList


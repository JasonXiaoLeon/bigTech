import React from 'react'

interface Props {
  List: Array<{
    name: string
    color: string
  }>
}

const GoalLabel: React.FC<Props> = ({ List }) => {
  return (
    <div className='w-[360px] md:w-[690px] lg:w-[710px] xl:w-[711.66px] h-full'>
      <ul className="flex justify-between md:mx-[50px]">
        {List.map((item, index) => (
          <li
            key={index}
            className="flex flex-col uppercase items-center justify-center h-[46px] pb-[25px] "
          >
            <span 
              className="font-bold text-[12px] h-[30px]"
              style={{ color: item.color }}
            >
              {item.name}
            </span>
            
              <span 
                className="w-[2px] h-[14px]"
                style={{ color: item.color }}
              >
                |
              </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalLabel
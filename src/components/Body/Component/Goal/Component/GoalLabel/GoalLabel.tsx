import React from 'react'

interface Props {
  List: Array<{
    name: string
    color: string
  }>
}

const GoalLabel: React.FC<Props> = ({ List }) => {
  return (
    <div className='w-1/3 mx-[50px]'>
      <ul className="flex w-full p-0 justify-between">
        {List.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center h-[51.733px]"
          >
            <span 
              className="font-bold text-[12px]"
              style={{ color: item.color }}
            >
              {item.name}
            </span>
            
              <span 
                className="h-[12px]"
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
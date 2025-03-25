import React from 'react'
import GoalLabel from './Component/GoalLabel'

const Goal = () => {
  const List = [
    {name: 'PRE SELL', color: '#00c4f4'},
    {name: 'SOFT SELL', color:'#ff9700'},
    {name: 'BONUS', color:'#12d176'},
  ]
  return (
    <div className='flex justify-center w-[711.66px] mx-[50px]'>
      <GoalLabel List={List}/>
    </div>
  )
}

export default Goal

import React from 'react'
import GoalLabel from './Component/GoalLabel'

const Goal = () => {
  const List = [
    {name: 'PRE SELL', color: '#00c4f4'},
    {name: 'SOFT CAP', color:'#ff9700'},
    {name: 'BONUS', color:'#12d176'},
  ]
  return (
    <div>
      <GoalLabel List={List}/>
    </div>
  )
}

export default Goal

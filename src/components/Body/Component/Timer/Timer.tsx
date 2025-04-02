import React from 'react'
import TimerHeader from './Component/TimerHeader'
import TimerCounter from './Component/TimerCounter'

const Timer = () => {
    return (
        <div className="flex flex-col items-center ">
            <TimerHeader />
            <TimerCounter />
        </div>
    )
}

export default Timer

import React from 'react'
import InternshipSchedule from '../_Components/InternshipSchedule/InternshipSchedule'
import Attendance from '../_Components/Attendance/Attendance'
import SickLeave from '../_Components/SickLeave/SickLeave'
import { auth } from '@/lib/auth'

const page = async () => {
  const session = await auth()
  const email = session?.user?.email
  return (
    <div className='flex'>
      <InternshipSchedule email={email}/>
      <div className='flex'>
        <Attendance/>
        {/* <SickLeave/> */}
      </div>
    </div>
  )
}

export default page

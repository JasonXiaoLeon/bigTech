import React from 'react'
import { auth } from '@/lib/auth'
import AllBooking from '../_Components/AllBooking/AllBooking'

const page = async () => {
  const session = await auth()
  const email = session?.user?.email || '' 
  return (
    <div>
      <AllBooking email={email}/>
    </div>
  )
}

export default page

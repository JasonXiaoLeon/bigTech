import React from 'react'
import BookingList from '../_Components/BookingList/BookingList'
import { auth } from '@/lib/auth'

const page = async () => {
  const session = await auth()
  const email = session?.user?.email || '' 
  return (
    <div>
      <BookingList email={email}/>
    </div>
  )
}

export default page

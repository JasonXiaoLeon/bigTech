import React from 'react'
import { auth } from '@/lib/auth'
import MyInfo from '../_Components/MyInfo/MyInfo'

const page = async () => {
  const session = await auth()
  const email = session?.user?.email || '' 
  return (
    <div>
      <MyInfo email={email}/>
    </div>
  )
}

export default page

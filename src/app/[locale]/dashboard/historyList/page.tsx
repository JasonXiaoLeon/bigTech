import React from 'react'
import { auth } from '@/lib/auth'
import HistoryList from '../_Components/HistoryList/HistoryList'

const page = async () => {
  const session = await auth()
  const email = session?.user?.email || '' 
  return (
    <div>
      <HistoryList />
    </div>
  )
}

export default page
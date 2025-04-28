import React from 'react'
import {auth} from '@/lib/auth'
import NaviBar from './_Components/NaviBar/NaviBar'

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const session = await auth()
    const email = session?.user?.email || '' 
    return (
        <div className='flex'>
            <NaviBar email={email} />
            <main className="text-black">{children}</main>
        </div>
  )
}


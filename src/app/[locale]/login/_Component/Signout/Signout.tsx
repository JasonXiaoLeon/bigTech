"use client"
import React from 'react'
import { signOut } from 'next-auth/react'

const Signout = () => {
    const handleSignOut = async () => {
        await signOut()
    }
    return (
        <div className='text-white'>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Signout

import { signIn } from '@/lib/auth'
import React from 'react'

const GoogleSignIn = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signIn('google')
            }}
        >
            <button>Continue with Google</button>
        </form>
    )
}

export default GoogleSignIn

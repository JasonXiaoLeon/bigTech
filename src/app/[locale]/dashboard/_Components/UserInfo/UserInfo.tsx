import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const UserInfo = async () => {
    const session = await auth()
    // if(!session) redirect("/en")
    return (
        <div>
            {session ? (
                <div className='text-white'>
                    <h2>Welcome, {session.user.email}</h2>
                    <p>Role: {session.user.role}</p>
                </div>
            ) : (
                <p>Not logged in</p>
            )}
        </div>
    )
}
export default UserInfo

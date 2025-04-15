import { auth }  from '@/lib/auth'

const UserInfo = async () => {
    const session = await auth()
    
    return (
        <div>
            {session ? (
                <div className="text-white">
                    <h2>Welcome, {session.user?.email}</h2>
                    <p>Gender: {session.user?.gender}</p>
                </div>
            ) : (
                <p>Not logged in</p>
            )}
        </div>
    )
}
export default UserInfo

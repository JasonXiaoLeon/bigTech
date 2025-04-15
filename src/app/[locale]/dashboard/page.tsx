import { auth } from '@/lib/auth'
import Signout from '../login/_Component/Signout/Signout'
import { redirect } from 'next/navigation'
import UserInfo from './_Components/UserInfo/UserInfo'

export default async function DashboardPage() {
    // const session = await auth()

    // if (!session) {
    //     redirect('/')
    // }

    return (
        <div className='bg-black'>
            <UserInfo />
            <Signout />
        </div>
    )
}

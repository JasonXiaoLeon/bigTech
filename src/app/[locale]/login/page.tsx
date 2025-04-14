import LoginForm from './_Component/LoginForm/LoginForm'
import { redirect } from 'next/navigation'
import GitHubSignIn from './_Component/GitHubSignIn/GitHubSignIn'
import { auth } from '@/lib/auth'
import GoogleSignIn from './_Component/GoogleSignIn/GoogleSignIn'

const LoginPage = async () => {
    const session = await auth()
    if(session) redirect("/")

    return (
        <div>
            <GitHubSignIn />
            <GoogleSignIn/>
            <LoginForm />
        </div>
    )
}
export default LoginPage
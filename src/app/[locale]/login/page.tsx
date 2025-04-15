import LoginForm from './_Component/LoginForm/LoginForm'
import GitHubSignIn from './_Component/GitHubSignIn/GitHubSignIn'
import GoogleSignIn from './_Component/GoogleSignIn/GoogleSignIn'

const LoginPage = async () => {
    // const session = await auth()
    // if(session) redirect("/")

    return (
        <div>
            <GitHubSignIn />
            <GoogleSignIn />
            <LoginForm />
        </div>
    )
}
export default LoginPage

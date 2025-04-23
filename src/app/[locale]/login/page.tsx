import LoginForm from './_Component/LoginForm/LoginForm'
import GitHubSignIn from './_Component/GitHubSignIn/GitHubSignIn'
import GoogleSignIn from './_Component/GoogleSignIn/GoogleSignIn'

const LoginPage = async () => {
    return (
        <div>
            <LoginForm />
            <div className='flex justify-center'>
                <div className='flex bg-gray-500 justify-around w-[450px] rounded-[6px]'>
                    <GitHubSignIn />
                    <GoogleSignIn />
                </div>
            </div>
            <button><a href='/signup'>Sign Up</a></button>
        </div>
    )
}
export default LoginPage

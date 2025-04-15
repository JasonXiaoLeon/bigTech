import { executeAction } from '@/lib/action'
import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation'

const LoginForm = async () => {
    const session = await auth()
    if (session) redirect('/dashboard')

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form
                action={async (formData: FormData) => {
                    'use server'
                    await executeAction({
                        actionFn: async () => {
                            await signIn('credentials', formData)
                        },
                    })
                }}
            >
                <input type="hidden" name="callbackUrl" value="/en/dashboard" />
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        autoComplete="current-password"
                        minLength={6}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default LoginForm

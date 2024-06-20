'use client'
import MediaLogin from '../components/media-login';
import TranditionnalLogin from "../components/traditional-login";

const LoginPage = () => {
    return (
        <>
            <main className="flex justify-center items-center flex-col min-h-screen bg-slate-100">
                <label className='text-3xl font-bold text-center mb-5'>Sign in</label>
                <form id="container" className='flex items-center flex-col shadow-xl w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-auto py-10 px-5 rounded-md bg-white'>
                    <TranditionnalLogin />
                    <button type='submit' className="btn btn-primary btn-sm mt-5 w-full bg-blue-500 hover:bg-blue-700">Sign in</button>
                    <label className="divider divider-neutral">OR</label>
                    <MediaLogin />
                </form>
            </main>
        </>
    )
}

export default LoginPage
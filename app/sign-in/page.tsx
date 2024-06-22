'use client'
import InputForm from '../components/InputForm';
import MediaSignIn from '../components/MediaSignIn';
import TranditionnalSignIn from '../components/TraditionalSignIn';
import { AreaCode } from '../types/areaCode';

const LoginPage = () => {
    const areaCodes: AreaCode[] = [
        { code: '+1', country: 'Canada' },
        { code: '+7', country: 'Russia' },
        { code: '+65', country: 'Singapore' },
        { code: '+81', country: 'Japan' },
        { code: '+82', country: 'South Korea' },
        { code: '+84', country: 'Vietnam' },
        { code: '+86', country: 'China' },
    ]
    return (
        <>
            <main className="flex justify-center items-center flex-col min-h-screen bg-slate-100">
                <label className='text-3xl font-bold text-center mb-5'>Sign in</label>
                <InputForm id="container" action="/sign-in">
                    <>
                        <TranditionnalSignIn areaCodes={areaCodes} />
                        <button type='submit' className="btn btn-primary btn-sm mt-5 w-2/3 bg-blue-500 hover:bg-blue-700">Sign in</button>
                        <label className="divider divider-neutral">OR</label>
                        <MediaSignIn />
                    </>
                </InputForm>
            </main>
        </>
    )
}

export default LoginPage
"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session?.status === 'authenticated'){
        router.push('/');
    }
},[session?.status, router]);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-overlay lg:bg-none'>
        <div className='lg:w-[450px] w-full h-screen flex flex-col items-center lg:justify-start justify-center gap-4 px-8 py-16'>

            <Link href="/"><Image src='/assets/logo.png' width={400} height={400} alt='logo' /></Link>

            <div className='w-96 flex flex-col justify-center mt-8 lg:mt-12 rounded-lg p-4 lg:p-0 bg-white shadow-md shadow-slate-400 lg:shadow-none'>
                <LoginForm />
            </div>
        </div>

        <div className='hidden lg:flex w-full h-screen'>
            <Image src='/assets/overlay.jpg' alt='overlay' width={1400} height={1080} className='w-full' />
        </div>
    </div>
  )
}

export default LoginView
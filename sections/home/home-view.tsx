"use client";
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeView = () => {

    const session = useSession();
    const isAuthenticated = session?.status === 'authenticated';

  return (
    <>
        <Navbar />
        <div className='w-full h-[90vh] bg-gradient-to-br from-slate-200/20 to-slate-300/40'>
            <div className="grid h-full content-center justify-items-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 container">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Your Journey to Knowledge Starts Here</h1>
                    
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to our Heliverse, a hub for curious minds and eager learners. Here, we cultivate a love for learning, inspire creativity, and foster growth in every student, every day.</p>

                    <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-400">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>

                    {isAuthenticated ? (
                    <Link href="/dashboard" className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center text-gray-900 border border-gray-900 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-purple-700">
                        Go to Dashboard
                    </Link> 
                    ) : (
                    <Link href="/login" className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center text-gray-900 border border-gray-900 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-purple-700">
                        Login to Dashboard
                    </Link>
                    )}
                     
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src="/assets/hero.png" width={800} height={800} alt="mockup" />
                </div>       
            </div>

            <div className='poly-left'></div>
            <div className='poly-right'></div>
        </div>
    </>
  )
}

export default HomeView
"use client";
import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  const isAuthenticated = session?.status === 'authenticated';

  return (
    <nav className='w-full flex md:justify-between justify-center items-center bg-white px-20 py-4'>
        <Image src='/assets/logo.png' width={400} height={400} alt='logo' />
        {isAuthenticated ? (
          <Button onClick={() => signOut()} variant='outline' className='font-semibold hidden md:block'>Logout</Button>
        ) : (
          <Link href='/login' className={`${buttonVariants({variant: 'outline'})} text-lg font-semibold hidden md:block`}>Login</Link>
        )}
    </nav>
  )
}

export default Navbar
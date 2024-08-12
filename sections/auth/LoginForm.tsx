"use client";
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) => {
            if(callback?.error){
                console.error('Invalid Credentials:',callback?.error)
            }

            if(callback?.ok){
                router.push('/dashboard');
            }
        })
        .finally(() => setIsLoading(false));
    }

  return (
    <>
        <div className='sm:w-full sm:mx-auto'>
            <h2 className='text-xl font-semibold tracking-tight'>
                Sign in to your account
            </h2>
        </div>

        <div className='mt-8 lg:mt-12 sm:w-full sm:mx-auto'>
            <form className='flex flex-col w-full gap-6' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className={`${errors['email'] ? 'focus:ring-rose-500' : 'focus-visible:ring-ring'} flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`} placeholder='Email' {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} disabled={isLoading} />

                <input type="password" className={`${errors['password'] ? 'focus:ring-rose-500' : 'focus-visible:ring-ring'} flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`} placeholder='Password' {...register("password", {required: true})} disabled={isLoading} />

                <Button type='submit' className='h-11 mt-4' disabled={isLoading}>Login</Button>
            </form>
        </div>
    </>
  )
}

export default LoginForm
"use client";
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface CreateStudentProps{
    onClose: () => void;
}

const CreateStudent: React.FC<CreateStudentProps> = ({onClose}) => {

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
            name: '',
            email: '',
            password: '',
            role: 'STUDENT',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => toast.success('New Student Account Created'))
            .then(() => onClose())
            .then(() => router.refresh())
            .catch(() => toast.error('Something went wrong'))
            .finally(() => setIsLoading(false))
        
    }

  return (
    <>
        <div>
            <form className='flex flex-col w-full gap-6' onSubmit={handleSubmit(onSubmit)}>
                <input type="name" className={`${errors['name'] ? 'focus:ring-rose-500' : 'focus-visible:ring-ring'} flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`} placeholder='Name' {...register("name", {required: true})} disabled={isLoading} />

                <input type="email" className={`${errors['email'] ? 'focus:ring-rose-500' : 'focus-visible:ring-ring'} flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`} placeholder='Email' {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} disabled={isLoading} />

                <input type="password" className={`${errors['password'] ? 'focus:ring-rose-500' : 'focus-visible:ring-ring'} flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`} placeholder='Password' {...register("password", {required: true})} disabled={isLoading} />

                <Button type='submit' className='h-11 mt-4' disabled={isLoading}>Add Student Account</Button>
            </form>
        </div>
    </>
  )
}

export default CreateStudent
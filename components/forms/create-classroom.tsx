"use client";
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { timeArray, weekdays } from '@/constants/data';
import { User } from '@prisma/client';
  

interface CreateClassroomProps{
    onClose: () => void;
    teachers: User[];
}

const CreateClassroom: React.FC<CreateClassroomProps> = ({onClose, teachers}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDay, setEndDay] = useState('');
    const [teacher, setTeacher] = useState('Not Assigned');
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
            startTime: '',
            endTime: '',
            startDay: '',
            endDay: '',
            teacher: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        const updatedData = {...data, startTime, endTime, startDay, endDay, teacher}

        axios.post('/api/classroom', updatedData)
            .then(() => toast.success('New Classroom Created'))
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

                <div className='w-full flex gap-4'>
                    <Select onValueChange={(value) => setStartTime(value)}>
                        <SelectTrigger className='h-11'>
                            <SelectValue placeholder='Start Time' />
                        </SelectTrigger>
                        <SelectContent>
                            {timeArray.map((item) => (
                                <SelectItem value={item} key={`st${item}`}>{item}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => setEndTime(value)}>
                        <SelectTrigger className='h-11'>
                            <SelectValue placeholder='End Time' />
                        </SelectTrigger>
                        <SelectContent>
                            {timeArray.map((item) => (
                                <SelectItem value={item} key={`et${item}`}>{item}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='w-full flex gap-4'>
                    <Select onValueChange={(value) => setStartDay(value)}>
                        <SelectTrigger className='h-11'>
                            <SelectValue placeholder='Start Day' />
                        </SelectTrigger>
                        <SelectContent>
                            {weekdays.map((item) => (
                                <SelectItem value={item} key={`sd${item}`}>{item}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => setEndDay(value)}>
                        <SelectTrigger className='h-11'>
                            <SelectValue placeholder='End Day' />
                        </SelectTrigger>
                        <SelectContent>
                            {weekdays.map((item) => (
                                <SelectItem value={item} key={`ed${item}`}>{item}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Select onValueChange={(value) => setTeacher(value)}>
                    <SelectTrigger className='h-11'>
                        <SelectValue placeholder='Teacher' />
                    </SelectTrigger>
                    <SelectContent>
                        {teachers?.length > 0 ? (
                            <>
                                {teachers.map((item) => (
                                    <SelectItem value={item?.id} key={`ed${item?.id}`}>{item?.name}</SelectItem>
                                ))}
                            </>
                        ) : (
                            <SelectItem value='Not Assigned'>No teacher available</SelectItem>
                        )}
                        
                    </SelectContent>
                </Select>

                <Button type='submit' className='h-11 mt-4' disabled={isLoading}>Add Classroom</Button>
            </form>
        </div>
    </>
  )
}

export default CreateClassroom
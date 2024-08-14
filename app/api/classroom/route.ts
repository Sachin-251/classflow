import getCurrentUser from '@/app/actions/getCurrentUser';
import getTeacherById from '@/app/actions/getTeacherById';
import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request){
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { name, startTime, endTime, startDay, endDay, teacher } = body;
        const teacherName = await getTeacherById(teacher);
        
        if(!currentUser?.id || !currentUser?.email || currentUser?.role !== 'PRINCIPAL'){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const newClassroom = await prisma.classroom.create({
            data: {
                name: name,
                startTime: startTime,
                endTime: endTime,
                startDay: startDay,
                endDay: endDay,
                teacherId: teacher,
                teacherName: teacherName?.name
            }
        })

        const classroomIds = [newClassroom?.id]

        const teacherUpdate = await prisma.user.update({
            data: {
                classroomIds: classroomIds
            },
            where: {
                id: teacher
            }
        })

        return NextResponse.json(newClassroom);
    } catch (error) {
        console.error("Classroom: ",error);
        return new NextResponse('Internal Error', { status: 500 })
    }
}
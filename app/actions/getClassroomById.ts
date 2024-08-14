import prisma from '@/lib/prismadb';
import getCurrentUser from './getCurrentUser';

const getClassroomById = async (classroomId: string) => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser?.email || !currentUser?.id){
            return null;
        }

        const classroom = await prisma.classroom.findUnique({
            where: {
                id: classroomId
            }
        });

        return classroom;
    } catch (error) {
        return null;
    }
}

export default getClassroomById;
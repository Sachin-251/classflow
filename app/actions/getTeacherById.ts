import prisma from '@/lib/prismadb';
import getCurrentUser from './getCurrentUser';

const getTeacherById = async (teacherId: string) => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser?.email || !currentUser?.id){
            return null;
        }

        const teacher = await prisma.user.findUnique({
            where: {
                id: teacherId
            }
        });

        return teacher;
    } catch (error) {
        return null;
    }
}

export default getTeacherById;
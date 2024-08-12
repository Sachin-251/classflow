import prisma from "@/lib/prismadb";
import getSession from "./getSession";

const getTeachers = async () => {
    const session = await getSession();

    if(!session?.user?.email){
        return [];
    }

    try {
        const teachers = await prisma.user.findMany({
            where: {
                role: 'TEACHER'
            }
        });

        return teachers;
    } catch (error) {
        return []
    }
}

export default getTeachers;
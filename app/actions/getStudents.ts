import prisma from "@/lib/prismadb";
import getSession from "./getSession";

const getStudents = async () => {
    const session = await getSession();

    if(!session?.user?.email){
        return [];
    }

    try {
        const students = await prisma.user.findMany({
            where: {
                role: 'STUDENT'
            }
        });

        return students;
    } catch (error) {
        return []
    }
}

export default getStudents;
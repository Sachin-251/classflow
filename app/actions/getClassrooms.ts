import prisma from "@/lib/prismadb";
import getSession from "./getSession";

const getClassrooms = async () => {
    const session = await getSession();

    if(!session?.user?.email){
        return [];
    }

    try {
        const classrooms = await prisma.classroom.findMany();

        return classrooms;
    } catch (error) {
        return []
    }
}

export default getClassrooms;
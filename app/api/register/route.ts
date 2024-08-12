import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const body = await request.json();
        const {name, email, password, role} = body;

        if(!email || !name || !password || !role){
            return new NextResponse('Missing info', {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role
            }
        });

        return NextResponse.json(user);
    } catch (error: any) {
        console.error('Registration_Error');
        return new NextResponse('Internal Error', {status: 500});
    }
    
}
import {NextResponse, NextRequest, NextFetchEvent} from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
	const data = await req.json();
	const {email, name, password} = data;

	const isUser = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (isUser) {
		return new NextResponse('User already exists', {status: 500});
	}

	const hashedPassword = await bcrypt.hash(password, 12);

	const user = await prisma.user.create({
		data: {
			email,
			name,
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}

// export default NextAuth(authOptions);

import {NextResponse, NextRequest, NextFetchEvent} from 'next/server';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		// ...add more providers here
	],
};

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url, 'http://localhost:3000');

	try {
		// mock data
		// await prisma.user.createMany({data: mockedUser});
		// await prisma.post.createMany({data: mockedPost});
		const name = searchParams.get('name');
		const country = searchParams.get('country');
		const page = parseInt(name as string, 10) || 1;
		const pageSize = 10;
		const skip = (page - 1) * pageSize;

		// const users: IUser[] = await prisma.user.findMany({
		// 	where: {
		// 		OR: [
		// 			{
		// 				name: {
		// 					contains: name ? name.toLowerCase().trim() : '',
		// 					mode: 'insensitive',
		// 				},
		// 			},
		// 			{
		// 				country: {
		// 					contains: country ? country.toLowerCase().trim() : '',
		// 					mode: 'insensitive',
		// 				},
		// 			},
		// 		],
		// 	},
		// 	include: {
		// 		posts: true,
		// 	},
		// 	take: pageSize,
		// 	skip,
		// });
		if (1 > 0) {
			return NextResponse.json({ok: true});
		} else {
			return NextResponse.json({users: [], ok: false});
		}
	} catch (error) {
		console.log(error);
		throw new Error('Something went wrong');
	}
}

// export async function POST(req: Request) {
// 	const data = await req.json();
// 	const name = data?.searchedUser;
// 	const users = await prisma.user.findMany({
// 		where: {
// 			name: {
// 				contains: name?.toLowerCase() ?? '',
// 			},
// 		},
// 	});
// 	if (users.length === 0) return NextResponse.json({users, ok: false});
// 	return NextResponse.json({users, ok: true});
// }

// export default NextAuth(authOptions);

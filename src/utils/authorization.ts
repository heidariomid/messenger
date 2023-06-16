import {IUser} from '@/Interface/IUser';
import {NextRequest} from 'next/server';

export const getUserFromCookie = async (request: NextRequest) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
		headers: {
			'Content-Type': 'application/json',
			'Cookie': request.headers.get('cookie') || '',
		},
		credentials: 'include',
	});
	const {data} = (await res.json()) || {};
	const user: IUser = data?.user;
	if (!user) return null;
	return user;
};

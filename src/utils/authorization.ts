import {IUser} from '@/Interface/IUser';
import {NextRequest} from 'next/server';

export const getUserFromCookie = async (request: NextRequest) => {
	let strCookie = '';
	request.cookies.getAll().forEach((item) => {
		strCookie += `${item?.name}=${item?.value};`;
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
		headers: {
			Cookie: strCookie,
		},
		credentials: 'include',
	});
	const {data} = (await res.json()) || {};
	const user: IUser = data?.user;
	if (!user) return null;
	return user;
};

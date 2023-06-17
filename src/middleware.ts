import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {IUser} from './Interface/IUser';
import {getUserFromCookie} from './utils/authorization';

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const user: IUser | null = await getUserFromCookie(request);
	if (path.startsWith('/profile')) {
		if (!user) return NextResponse.redirect(new URL('/auth', request.url));
	}

	if (path.startsWith('/admin')) {
		if (!user) return NextResponse.redirect(new URL('/auth', request.url));
		if (user && user?.role !== 'ADMIN') return NextResponse.redirect(new URL('/auth', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/profile/:path*', '/admin/:path*'],
};

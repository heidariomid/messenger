import './globals.css';
import {vazirFont, estedadFont} from '@/constants/localFonts';
import SessionProvider from '../provider/SessionProvider';
import ReduxProvider from '../provider/ReduxProvider';
import {getServerSession} from 'next-auth';
import Login from './auth/page';
import ToasterContext from '@/app/context/ToasterContext';

export const metadata = {
	title: 'Luxoré',
	description: 'super fast and minimal E-commerce web app',
};
export default async function RootLayout({children}: {children: React.ReactNode}) {
	const session = await getServerSession();
	return (
		<html lang='fa' dir='rtl'>
			<body className={`${vazirFont.className} ${vazirFont.variable} ${estedadFont.variable} bg-secondary-50 `}>
				<ToasterContext />
				<ReduxProvider>
					<SessionProvider session={session}>{!session ? <Login /> : <>{children}</>}</SessionProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}

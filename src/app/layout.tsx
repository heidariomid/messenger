import './globals.css';
import {vazirFont, estedadFont} from '@/constants/localFonts';
import SessionProvider from '../provider/SessionProvider';
import ReduxProvider from '../provider/ReduxProvider';
import ReacrQueryProvider from '../provider/ReactQueryProvider';
import {getServerSession} from 'next-auth';
import ToasterContext from '@/context/ToasterContext';
import Home from './page';
import Header from './Header';

export const metadata = {
	title: 'Luxoré',
	description: 'super fast and minimal E-commerce web app',
};
export default async function RootLayout({children}: {children: React.ReactNode}) {
	const session = await getServerSession();
	return (
		<html lang='fa' dir='rtl'>
			<body className={`${vazirFont.className} ${vazirFont.variable} ${estedadFont.variable}  `}>
				<ToasterContext />
				<ReacrQueryProvider>
					<ReduxProvider>
						<SessionProvider session={session}>
							<Header />
							<div className='w-full mx-auto flex justify-center items-center h-screen '>{children}</div>
						</SessionProvider>
					</ReduxProvider>
				</ReacrQueryProvider>
			</body>
		</html>
	);
}

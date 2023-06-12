import './globals.css';
import {vazirFont, estedadFont} from '@/constants/localFonts';
import SessionProvider from '../provider/SessionProvider';
import ReduxProvider from '../provider/ReduxProvider';
import {getServerSession} from 'next-auth';
import ToasterContext from '@/app/context/ToasterContext';
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
				<ReduxProvider>
					<SessionProvider session={session}>
						<Header />
						{children}
					</SessionProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}

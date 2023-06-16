'use client';

import {useUser} from '@/hooks/useUser';
import Dashboard from './dashboard/page';

const Home = () => {
	const {user} = useUser();
	return <>{user ? <Dashboard user={user} /> : <div>Home</div>}</>;
};

export default Home;

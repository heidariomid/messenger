'use client';

import {signOut} from 'next-auth/react';

const Home = () => {
	return (
		<div className=' flex flex-col py-12 mx-auto w-full min-h-screen justify-center bg-gray-100 '>
			<div className='flex justify-center items-center text-center  '>
				<button className='bg-red-500 text-white absolute top-0 left-0 m-4 px-4 py-1  ' onClick={() => signOut()}>
					sign out
				</button>
				<div className='mx-auto flex flex-col self-center gap-5 '>
					<div className='flex flex-col justify-center items-center bg-secondary-400 text-white text-3xl rounded-full px-5 py-1'>Welcome Home</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

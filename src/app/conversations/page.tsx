'use client';
import {signOut, useSession} from 'next-auth/react';
import Link from 'next/link';
const Conversations = () => {
	const session = useSession();
	return (
		<div className=' flex flex-col py-12 mx-auto w-full min-h-screen justify-center bg-gray-100 '>
			<div className='absolute top-0 right-0 mr-4 mt-4'>
				{session?.status === 'authenticated' ? (
					<div className='flex justify-center items-center w-full text-lg'>
						<button onClick={() => signOut()} className='bg-red-500 text-white hover:text-orange-500 px-4 py-1 ' type='submit'>
							Sign out
						</button>
					</div>
				) : (
					<div className='flex justify-center items-center w-full text-lg'>
						<Link className='cursor-pointer bg-sky-400 text-white px-2 ' href='/auth'>
							Log In
						</Link>
					</div>
				)}
			</div>
			<div className='flex justify-center items-center text-center  '>
				<div className='mx-auto flex flex-col self-center gap-5 '>
					<div className='flex flex-col justify-center items-center bg-secondary-400 text-white text-3xl rounded-full px-5 py-1'>
						Welcome Conversations
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conversations;

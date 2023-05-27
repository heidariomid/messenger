'use client';
import {useState, useCallback, useRef, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {signIn, signOut, useSession} from 'next-auth/react';
import {LockClosedIcon} from '@heroicons/react/24/solid';

interface Props {}

const Login = (props: Props) => {
	const router = useRouter();
	const {data: session} = useSession();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			const res = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const data = await res.json();
			if (data.error) {
				setError(data.message);
			} else {
				router.push('/');
			}
		},
		[email, password],
	);
	const handleEmail = useCallback((e: any) => {
		setEmail(e.target.value);
	}, []);
	const handlePassword = useCallback((e: any) => {
		setPassword(e.target.value);
	}, []);

	useEffect(() => {
		if (session) {
			router.push('/');
		}
	}, [session]);

	return (
		<main className='font-ubuntu'>
			<div className='bg-gray-900 min-w-[480px] py-6 '>
				<LockClosedIcon className='h-24 mb-10 w-full' />
				<form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 text-2xl text-black '>
					<input
						className='w-[80%] border border-gray-300 rounded-md p-2 m-2 focus:outline-none focus:outline-orange-500'
						type='email'
						placeholder='email'
						value={email}
						onChange={handleEmail}
					/>
					<input
						className='w-[80%] border border-gray-300 rounded-md p-2 m-2 focus:outline-none focus:outline-orange-500'
						type='password'
						placeholder='password'
						value={password}
						onChange={handlePassword}
					/>
					<button className='mt-8 bg-orange-500 hover:text-white px-4 py-2' type='submit'>
						Sign in
					</button>
					{error && <div className='text-red-400 '>{error}</div>}
				</form>
				<div className='w-full text-lg text-center mt-4'>or</div>
				{session ? (
					<div className='flex justify-center items-center w-full text-lg'>
						<button onClick={() => signOut()} className='mt-4 bg-gray-600 hover:text-orange-500 px-4 py-2 ' type='submit'>
							Sign out
						</button>
					</div>
				) : (
					<div className='flex justify-center items-center w-full text-lg'>
						<button onClick={() => signIn('google')} className='mt-4 bg-gray-600 hover:text-orange-500 px-4 py-2 ' type='submit'>
							Sign in with Google
						</button>
					</div>
				)}
			</div>
		</main>
	);
};

export default Login;

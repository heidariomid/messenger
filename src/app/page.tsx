import AuthForm from '@/components/auth/AuthForm';
import Image from 'next/image';

const Home = () => {
	return (
		<div className=' flex flex-col py-12 mx-auto w-full min-h-screen justify-center bg-gray-100 '>
			<div className='flex justify-center items-center text-center  '>
				<div className='mx-auto flex flex-col self-center gap-5 '>
					<Image className='mx-auto w-auto' src={'/assets/images/logo.png'} alt='logo' height={48} width={48} />
					<h1 className='text-6xl text-cyan-500 font-bold '>miChat</h1>
					<div className='flex flex-col md:block '>
						<AuthForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

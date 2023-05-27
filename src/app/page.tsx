import Image from 'next/image';

const Home = () => {
	return (
		<div className=' flex flex-col py-12 mx-auto w-full min-h-screen justify-center bg-black '>
			<div className='flex justify-center items-center text-center  '>
				<div className='mx-auto flex flex-col self-center gap-5 '>
					<Image className='mx-auto w-auto' src={'/assets/images/logo.png'} alt='logo' height={48} width={48} />
					<h1 className='text-6xl text-white'>NextJs 13</h1>
					<div className='flex flex-col md:block '>
						<span className='bg-amber-300 px-2 py-1 mx-1 rounded-full '>tailwindcss</span>,
						<span className='bg-red-300 px-2 py-1 mx-1 rounded-full'>redux-toolkit</span>,
						<span className='bg-blue-300 px-2 py-1 mx-1 rounded-full'>react-query</span>,
						<span className='bg-green-300 px-2 py-1 mx-1 rounded-full'>react-hook-form</span>,
						<span className='bg-pink-300 px-2 py-1 mx-1 rounded-full'>heroicons</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

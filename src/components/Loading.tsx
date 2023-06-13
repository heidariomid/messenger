import {ArrowPathIcon} from '@heroicons/react/24/solid';

const Loading = () => {
	return (
		<div className=' btn btn--loading w-full   '>
			<div className='flex flex-row mx-auto gap-x-3 '>
				<div className='text-white w-full flex justify-center gap-x-3 '>
					<div>Loading</div>
					<div>
						<ArrowPathIcon className=' animate-spin  w-5 h-5 absolute  text-white' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;

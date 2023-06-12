import {ArrowPathIcon} from '@heroicons/react/24/solid';
import React from 'react';

const Loading = () => {
	return (
		<div className='flex flex-row  w-full  justify-between'>
			<div className='flex flex-row mx-auto gap-x-3'>
				<span className='text-white '>Loading</span>
				<div>
					<ArrowPathIcon className=' animate-spin  w-5 h-5 absolute  text-green-200' />
				</div>
			</div>
		</div>
	);
};

export default Loading;

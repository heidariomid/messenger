'use client';

import React, {useState} from 'react';
import Login from './login';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import CheckOTP from '@/components/OTP/CheckOTP';

const auth = () => {
	return (
		<div className=' flex flex-col  mx-auto w-full min-h-screen justify-center -mt-10  '>
			<div className='flex justify-center items-center text-center  '>
				<div className='mx-auto flex flex-col self-center gap-5 '>
					<Link className='cursor-pointer  ' href='/'>
						<div className='flex flex-col justify-center items-center '>
							<h1 className='text-6xl bg-black-400 font-bold mt-4 '>
								<ShoppingBagIcon className='h-16 w-16  text-secondary-400 text-end ' />
								<span className='font-extrabold inline-flex bg-secondary-400 px-4 py-3 -mr-2 text-primary-50 font-estedad  rounded-2xl'>
									دلیورو
								</span>
							</h1>
						</div>
					</Link>
					<div className='flex flex-col md:block '>
						<Login />
					</div>
				</div>
			</div>
		</div>
	);
};

export default auth;

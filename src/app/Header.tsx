'use client';

import {IUser} from '@/Interface/IUser';
import {useUser} from '@/hooks/useUser';
import Link from 'next/link';
import BasketKishA2z from '@/assets/images/basket.png';
import Image from 'next/image';

const Header = () => {
	const {user, isLoading}: {user: IUser | null | undefined; isLoading: boolean} = useUser();
	const cartLength = () => user?.cart?.products?.reduce((acc, curr) => acc + curr.quantity, 0) || 0;
	return (
		<header className={`shadow-md opacity-100 `}>
			<nav>
				<ul className='container flex  justify-between py-4 xl:max-w-screen-xl '>
					<Link className='block py-2 cursor-pointer' href={'/'}>
						<li>خانه</li>
					</Link>
					<Link className='block py-2 cursor-pointer' href={'/products'}>
						<li>محصولات</li>
					</Link>

					<Link className='block py-2 cursor-pointer' href={'/admin'}>
						<li>پنل ادمین</li>
					</Link>

					<Link className='block py-2 cursor-pointer' href={'/profile'}>
						<li>پنل کاربر</li>
					</Link>
					{user && (
						<Link className='block py-2 cursor-pointer ' href={'/'}>
							<div className='flex gap-x-3 relative'>
								<Image src={BasketKishA2z} alt='basket' className='w-6 h-6 ' />
								{cartLength() > 0 && (
									<div className='bg-success text-white  h-5 w-5 rounded-full absolute -top-1 left-5'>
										<div className='mx-auto text-center'>{cartLength()}</div>
									</div>
								)}
							</div>
						</Link>
					)}
					{!user ? (
						<Link className='block py-2 cursor-pointer btn--primary' href={'/auth'}>
							<li>ورود</li>
						</Link>
					) : (
						<Link className='block py-2 cursor-pointer btn--primary' href={'/auth'}>
							<li>خروج</li>
						</Link>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

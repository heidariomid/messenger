'use client';

import {useUser} from '@/hooks/useUser';
import Link from 'next/link';

const Header = () => {
	const {user, isLoading} = useUser();
	const cartLength = () => user?.cart?.products?.reduce((acc, curr) => acc + curr.quantity, 0);
	return (
		<header className={`shadow-md  ${isLoading ? 'opacity-0' : 'opacity-100'} `}>
			<nav>
				<ul className='container flex  justify-between py-2 xl:max-w-screen-xl '>
					{user && (
						<Link className='block py-2 cursor-pointer ' href={'/'}>
							<div className='flex gap-x-3'>
								<li>سبد خرید</li>
								{cartLength() > 0 && <div className='bg-success text-white px-2 rounded-full'> {cartLength()} </div>}
							</div>
						</Link>
					)}
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

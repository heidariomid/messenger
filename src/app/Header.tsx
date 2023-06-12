import Link from 'next/link';

const Header = () => {
	return (
		<header className='shadow-md  '>
			<nav>
				<ul className='container flex justify-between py-2 xl:max-w-screen-xl '>
					<Link className='block py-2 cursor-pointer' href={'/'}>
						<li>خانه</li>
					</Link>
					<Link className='block py-2 cursor-pointer' href={'/products'}>
						<li>محصولات</li>
					</Link>
					<Link className='block py-2 cursor-pointer' href={'/auth'}>
						<li>ورود</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

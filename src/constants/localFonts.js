import LocalFont from 'next/font/local';
const vazirFont = LocalFont({
	src: [
		{
			path: '../../public/assets/fonts/vazir/Vazirmatn-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/vazir/Vazirmatn-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/vazir/Vazirmatn-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/vazir/Vazirmatn-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/vazir/Vazirmatn-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-vazir',
	style: 'normal',
	display: 'block',
});
const estedadFont = LocalFont({
	src: [
		{
			path: '../../public/assets/fonts/estedad/Estedad-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/estedad/Estedad-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/estedad/Estedad-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/estedad/Estedad-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/estedad/Estedad-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-estedad',
	style: 'normal',
	display: 'block',
});

export {vazirFont, estedadFont};

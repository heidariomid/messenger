/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
	return ({opacityValue}) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				estedad: ['var(--font-estedad)', ...fontFamily.sans],
			},
			colors: {
				primary: {
					900: withOpacity('--color-primary-900'),
					800: withOpacity('--color-primary-800'),
					700: withOpacity('--color-primary-700'),
					600: withOpacity('--color-primary-600'),
					500: withOpacity('--color-primary-500'),
					400: withOpacity('--color-primary-400'),
					300: withOpacity('--color-primary-300'),
					200: withOpacity('--color-primary-200'),
					100: withOpacity('--color-primary-100'),
					50: withOpacity('--color-primary-50'),
				},
				secondary: {
					900: withOpacity('--color-secondary-900'),
					800: withOpacity('--color-secondary-800'),
					700: withOpacity('--color-secondary-700'),
					600: withOpacity('--color-secondary-600'),
					500: withOpacity('--color-secondary-500'),
					400: withOpacity('--color-secondary-400'),
					300: withOpacity('--color-secondary-300'),
					200: withOpacity('--color-secondary-200'),
					100: withOpacity('--color-secondary-100'),
					50: withOpacity('--color-secondary-50'),
				},
				success: withOpacity('--color-success'),
				warning: withOpacity('--color-warning'),
				error: withOpacity('--color-error'),
			},
			container: {
				center: true,
			},
			boxShadow: {
				'input-focus': '0 8px 12px -10px rgb(var(--color-primary-100))',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')({strategy: 'class'})],
};

import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
	darkMode: ['selector', '[data-mode="dark"]'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			...colors,
			'slate-950': '#020416',
			lime: '#C0E449'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	}
}
export default config

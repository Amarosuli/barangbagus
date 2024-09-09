import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'nerko-one': '"Nerko One", cursive'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;

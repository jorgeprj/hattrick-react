/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		"./src/**/*.jsx"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				logo: ['Montserrat', 'Arial', 'sans-serif'],
			},
			colors: {
				'success': '#04A96B',
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
			},
			colors: {
				brand: {
					DEFAULT: '#0ea5e9',
					dark: '#0284c7'
				}
			}
		}
	},
	plugins: [],
}

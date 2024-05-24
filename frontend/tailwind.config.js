/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
			nude: '#F7E3DB',
			dark_turqouise: '#60BFC1',
			turqouise: '#BADFD7',
			rose: '#FDB7B9',
			nude_pink: '#C17779'
		},
	  },
	},
	plugins: [],
  }
  
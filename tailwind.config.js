/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ["synthwave"],
	},
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#200839",
				secondary: "#040415",
				icons: "#74ee15",
				heart: "#FE251B",
				dark: "#3b3b3b",
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			},
			scale: {
				'175': '1.75',
				'200': '2.00'
			}
		},
	},
	plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				NotoSans: ["Noto Sans JP", "sans-serif"],
				InriaSerif: ["Inria Serif", "serif"],
			},
			colors: {
				primary: "#13AD9C", // teal
				primaryHover: "#119788", // darker teal
				secondary: "#8b5cf6", // violet
				error: "#FF2F2F",
				lightGray: "#BDBDBD",
				hoverGray: "#F5F5F5",
				"background-light": "#F4F5FA",
			},
			borderRadius: {
				border10: "10px",
				border15: "15px",
			},
		},
	},
	plugins: [],
};

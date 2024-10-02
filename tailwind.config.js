/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				NotoSans: ["Noto Sans JP", "sans-serif"],
			},
			colors: {
				primary: "#13AD9C", // teal
				primaryHover: "#119788", // darker teal
				secondary: "#8b5cf6", // violet
				error: "#FF2F2F",
				lightGray: "#BDBDBD",
			},
			borderRadius: {
				border10: "10px",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6366f1",
				"primary-hover": "#4f46e5",
				secondary: "",
				lightGray: "",
				darkGray: "#9ca3af",
				bgLight: "#e2e8f0",
			},
			borderRadius: {
				round10: "10px",
				round15: "15px",
			},
		},
	},
	plugins: [],
};

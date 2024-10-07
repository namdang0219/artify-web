import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#13AD9C", // Teal
				primaryHover: "#119788", // Darker Teal
				secondary: "#8b5cf6", // violet
				error: "#FF2F2F",
				lightGray: "#BDBDBD",
				hoverGray: "#F5F5F5",
				"background-light": "#F4F5FA",
				"background-dark": "#0f172a", // Slate 900
			},
			borderRadius: {
				border10: "10px",
				border15: "15px",
			},
		},
	},
	plugins: [],
};
export default config;

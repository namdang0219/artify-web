import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
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
				"hoverGray-dark": "#374151", // Gray 700
				"background-light": "#F4F5FA",
				"background-dark": "#0f172a", // Slate 900
				"background-dark-main": "#1e293b", // Slate 800
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

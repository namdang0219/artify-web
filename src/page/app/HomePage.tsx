import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "store/global/globalSlice";
import { RootState } from "store/store";
import { useDarkMode } from "usehooks-ts";

const HomePage = () => {
	const { theme } = useSelector((state: RootState) => state.global);
	const dispatch = useDispatch();
	const { isDarkMode } = useDarkMode();

	useEffect(() => {
		switch (theme) {
			case "default":
				if (isDarkMode) {
					document.documentElement.setAttribute("class", "dark");
				} else {
					document.documentElement.setAttribute("class", "");
				}
				break;
			case "light":
				document.documentElement.setAttribute("class", "light");
				break;
			case "dark":
				document.documentElement.setAttribute("class", "dark");
				break;
			default:
				break;
		}
	}, [theme, isDarkMode]);

	return (
		<div className="flex items-center gap-4 p-10">
			<button
				className="p-4 text-white rounded hover:bg-primaryHover bg-primary"
				onClick={() => dispatch(setTheme("default"))}
			>
				default
			</button>
			<button
				className="p-4 text-white rounded hover:bg-primaryHover bg-primary"
				onClick={() => dispatch(setTheme("light"))}
			>
				light
			</button>
			<button
				className="p-4 text-white rounded hover:bg-primaryHover bg-primary"
				onClick={() => dispatch(setTheme("dark"))}
			>
				dark
			</button>
			<div>Current theme: {theme}</div>
		</div>
	);
};

export default HomePage;

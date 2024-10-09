import { IGlobalState } from "@/store/global/globalSlice";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export function useTheme() {
	const { isDarkMode } = useDarkMode();
	const { theme } = useAppSelector((state: RootState) => state.global);

	useEffect(() => {
		const handleThemeChange = (theme: IGlobalState["theme"]) => {
			switch (theme) {
				case "dark":
					return document.documentElement.setAttribute(
						"class",
						"dark"
					);
				case "light":
					return document.documentElement.setAttribute("class", "");
				case "default":
					return document.documentElement.setAttribute(
						"class",
						`${isDarkMode ? "dark" : ""}`
					);

				default:
					break;
			}
		};
		handleThemeChange(theme);
	}, [isDarkMode, theme]);
}

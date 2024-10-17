import { INavigation } from "./navigation";

interface ITopbarContent {
	pageLinks: INavigation[];
}

export const topbarContent: ITopbarContent = {
	pageLinks: [
		{
			label: {
				en: "Home",
				ja: "ホーム",
			},
			href: "/", // Home
			icon: <></>,
		},
		{
			label: {
				en: "Course",
				ja: "コース",
			},
			href: "/course",
			icon: <></>,
		},
		{
			label: {
				en: "Contest",
				ja: "コンテスト",
			},
			href: "/contest",
			icon: <></>,
		},
		{
			label: {
				en: "Workshop",
				ja: "ワークショップ",
			},
			href: "/workshop",
			icon: <></>,
		},
	],
};

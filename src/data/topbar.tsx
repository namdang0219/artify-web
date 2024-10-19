import { IconArrowDown } from "icon/topbar";
import { INavigation } from "./navigation";

interface ITopbarContent {
	pageLinks: INavigation[];
	search: {
		placeholder: { en: string; ja: string };
		buttonLabel: { en: string; ja: string };
	};
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
			icon: <IconArrowDown />,
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
	search: {
		placeholder: {
			en: "Search for courses, contest,...etc",
			ja: "コース・コンテストなどを検索する",
		},
		buttonLabel: {
			en: "Search",
			ja: "検索",
		},
	},
};

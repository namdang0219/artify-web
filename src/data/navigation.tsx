import { ReactElement } from "react";
import {
	IconCalendar,
	IconDashboard,
	IconGlobal,
	IconHelp,
	IconSetting,
} from "icon/navigation";

export interface INavigation {
	label: {
		en: string;
		ja: string;
	};
	href: string;
	icon: ReactElement;
}

export const navigations: INavigation[] = [
	{
		label: {
			en: "Dashboard",
			ja: "ダッシュボード",
		},
		href: "/dashboard",
		icon: <IconDashboard></IconDashboard>,
	},
	{
		label: {
			en: "Community",
			ja: "コミュニティー",
		},
		href: "/community",
		icon: <IconGlobal></IconGlobal>,
	},
	{
		label: {
			en: "Calendar",
			ja: "カレンダー",
		},
		href: "/calendar",
		icon: <IconCalendar></IconCalendar>,
	},
	{
		label: {
			en: "Help",
			ja: "ヘルプ",
		},
		href: "/help",
		icon: <IconHelp></IconHelp>,
	},
	{
		label: {
			en: "Setting",
			ja: "設定",
		},
		href: "/setting",
		icon: <IconSetting></IconSetting>,
	},
];

"use client";
import {
	IconCommunity,
	IconHome,
	IconLearn,
	IconNote,
	IconSchedule,
	IconSetting,
} from "@/components/icon/navigation";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
	const pathname = usePathname();

	return (
		<div className="mainSection">
			{/* navigation  */}
			<nav>
				<ul className="flex flex-col gap-0.5">
					{navigations.map((n, index) => (
						<li key={index}>
							<Link
								href={n.path}
								className={`block py-3 px-3 rounded-border10 ${
									pathname === n.path
										? "bg-secondary text-white"
										: "hover:bg-hoverGray"
								}`}
							>
								<div className="flex items-center gap-2">
									{n.icon}
									<span>{n.label}</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* theme setting  */}
			{/* <button
				className={`block py-3 px-3 rounded-border10`}
			>
				<div className="flex items-center gap-2">
					<span>テーマ</span>
				</div>
			</button> */}
		</div>
	);
};

const navigations = [
	{
		label: "ホーム",
		icon: <IconHome />,
		path: "/",
	},
	{
		label: "コミュニティー",
		icon: <IconCommunity />,
		path: "/community",
	},
	{
		label: "ノート",
		icon: <IconNote />,
		path: "/note",
	},
	{
		label: "学習",
		icon: <IconLearn />,
		path: "/learning",
	},
	{
		label: "スケジュール",
		icon: <IconSchedule />,
		path: "/schedule",
	},
	{
		label: "設定",
		icon: <IconSetting />,
		path: "/setting",
	},
];

export default Navigation;

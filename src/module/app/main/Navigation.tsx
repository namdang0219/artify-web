"use client";
import {
	IconContest,
	IconCourse,
	IconHome,
	IconSchedule,
	IconWorkshop,
} from "@/components/icon/navigation";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
	const pathname = usePathname();
	return (
		<div className="mainSection">
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
		label: "コンテスト",
		icon: <IconContest />,
		path: "/contest",
	},
	{
		label: "ワークショップ",
		icon: <IconWorkshop />,
		path: "/workshop",
	},
	{
		label: "勉強",
		icon: <IconCourse />,
		path: "/my-courses",
	},
	{
		label: "スケジュール",
		icon: <IconSchedule />,
		path: "/schedule",
	},
];

export default Navigation;

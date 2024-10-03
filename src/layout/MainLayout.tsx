import {
	IconContest,
	IconCourse,
	IconHome,
	IconSchedule,
	IconWorkshop,
} from "components/icon/sidebar";
import Topbar from "module/global/Topbar";
import React from "react";
import { NavLink } from "react-router-dom";

interface IMainLayout {
	children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
	return (
		<div>
			<Topbar></Topbar>
			<div className="grid grid-cols-[240px_1fr_320px] h-[calc(100vh-60px)] p-4 gap-4">
				{/* left sidebar  */}
				<div className="p-4 bg-white rounded-border10">
					<div className="space-y-0.5">
						{navigations.map((n) => (
							<div key={n.label}>
								<NavLink
									to={n.navigate}
									className={({ isActive }) =>
										`flex items-center gap-2 h-12 rounded-border10 px-4 ${
											isActive
												? "bg-secondary text-white"
												: "hover:bg-hoverGray"
										}`
									}
								>
									<span>{n.icon}</span>
									<span>{n.label}</span>
								</NavLink>
							</div>
						))}
					</div>
				</div>

				{/* center  */}
				<div className="bg-white rounded-border10">{children}</div>

				{/* right sidebar  */}
				<div className="bg-white rounded-border10"></div>
			</div>
		</div>
	);
};

const navigations = [
	{
		label: "Home",
		navigate: "/",
		icon: <IconHome />,
	},
	{
		label: "Contest",
		navigate: "/contest",
		icon: <IconContest />,
	},
	{
		label: "Workshop",
		navigate: "/workshop",
		icon: <IconWorkshop />,
	},
	{
		label: "My Courses",
		navigate: "/my-courses",
		icon: <IconCourse />,
	},
	{
		label: "Schedule",
		navigate: "/schedule",
		icon: <IconSchedule />,
	},
];

export default MainLayout;

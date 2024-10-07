import Topbar from "@/module/main/Topbar";
import React, { ReactNode } from "react";
import Navigation from "../module/main/Navigation";
import Sidebar from "../module/main/Sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Topbar></Topbar>
			<div className="grid grid-cols-3 gap-4">
				<Navigation></Navigation>
				{children}
				<Sidebar></Sidebar>
			</div>
		</div>
	);
};

export default MainLayout;

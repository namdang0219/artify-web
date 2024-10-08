import Topbar from "@/module/main/Topbar";
import React, { ReactNode } from "react";
import Navigation from "../module/main/Navigation";
import Sidebar from "../module/main/Sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Topbar></Topbar>
			<div className="grid grid-cols-[260px_1fr_400px] h-[calc(100vh-60px)] bg-background-light overflow-hidden">
				<div className="p-2.5">
					<Navigation></Navigation>
				</div>
				<main className="py-2.5">{children}</main>
				<div className="p-2.5">
					<Sidebar></Sidebar>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;

"use client";
import Topbar from "@/module/app/main/Topbar";
import React, { ReactNode } from "react";
import Navigation from "@/module/app/main/Navigation";
import Sidebar from "@/module/app/main/Sidebar";
import { useTheme } from "@/hook/useTheme";

const MainLayout = ({ children }: { children: ReactNode }) => {
	useTheme();
	return (
		<div>
			<Topbar></Topbar>
			<div className="grid grid-cols-[240px_1fr_350px] p-2.5 gap-2.5">
				<Navigation></Navigation>
				<main className="h-[calc(100vh-80px)] flex">
					<div className="flex flex-1 overflow-y-hidden mainSection">
						<div className="flex flex-1 overflow-y-scroll rounded-border10 scrollbar-hidden">
							{children}
						</div>
					</div>
				</main>
				<Sidebar></Sidebar>
			</div>
		</div>
	);
};

export default MainLayout;

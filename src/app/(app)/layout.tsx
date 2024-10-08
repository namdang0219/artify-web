import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import '../globals.scss';

export const metadata: Metadata = {
	title: "Artify",
	description: "A platform for artists and creators",
};

const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
};

export default AppLayout;

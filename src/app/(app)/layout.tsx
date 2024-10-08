import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import "../globals.scss";
import { M_PLUS_Rounded_1c } from "next/font/google";

const MPLUSRounded1c = M_PLUS_Rounded_1c({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Artify",
	description: "A platform for artists and creators",
};

const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body className={`${MPLUSRounded1c.className}`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
};

export default AppLayout;

import { Metadata } from "next";
import React, { ReactNode } from "react";
import "../globals.scss";
import AuthLayout from "@/layout/AuthLayout";
import StoreProvider from "../StoreProvider";

export const metadata: Metadata = {
	title: "Artify | Auth",
	description: "Authenticating users for Artify",
};

const AuthLayoutWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body>
				<StoreProvider>
					<AuthLayout>{children}</AuthLayout>
				</StoreProvider>
			</body>
		</html>
	);
};

export default AuthLayoutWrapper;

import { Metadata } from "next";
import React, { ReactNode } from "react";
import '../globals.css';

export const metadata: Metadata = {
	title: "Artify | Auth",
	description: "Authenticating users for Artify",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body>
				<div>auth layout</div>
				{children}
			</body>
		</html>
	);
};

export default AuthLayout;

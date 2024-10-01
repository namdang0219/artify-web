import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-screen h-screen flex">
			<div className="w-full max-w-[720px]">{children}</div>
			<div className="flex-1">
				<img
					src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="auth-banner"
					className="w-full h-full object-center object-cover"
				/>
			</div>
		</div>
	);
};

export default AuthLayout;

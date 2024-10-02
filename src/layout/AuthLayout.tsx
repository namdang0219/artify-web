import React from "react";

interface IAuthLayout {
	children: React.ReactNode;
	className?: string;
}

const AuthLayout = ({ children, className }: IAuthLayout) => {
	return (
		<div className="flex w-screen h-screen select-none">
			<div className={`w-full max-w-[720px] flex ${className}`}>
				{children}
			</div>
			<div className="flex-1">
				<img
					src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="auth-banner"
					className="object-cover object-center w-full h-full"
				/>
			</div>
		</div>
	);
};

export default AuthLayout;

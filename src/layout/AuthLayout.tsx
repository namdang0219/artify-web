import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-screen h-screen bg-white select-none">
			<div className={`w-full max-w-[720px] px-[100px] py-[80px]  flex`}>
				{children}
			</div>
			<div className="relative flex-1">
				<Image
					src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="auth-banner"
					className="object-cover object-center w-full h-full"
          width={1000}
          height={1000}
				/>
			</div>
		</div>
	);
};

export default AuthLayout;

import React from "react";

interface IAuthButton {
	children: string;
	className?: string;
}

const AuthButton = ({ children = "button", className = "" }: IAuthButton) => {
	return (
		<button
			className={`w-full transition-all hover:bg-primaryHover h-[70px] bg-primary rounded-border10 flex items-center justify-center text-white text-xl font-medium ${className}`}
		>
			{children}
		</button>
	);
};

export default AuthButton;

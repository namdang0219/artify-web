import React from "react";

interface IAuthButton {
	children: string;
	className?: string;
	type?: "submit" | "button";
}

const AuthButton = ({
	children = "button",
	className = "",
	type = "submit",
}: IAuthButton) => {
	return (
		<button
			type={type}
			className={`w-full transition-all hover:bg-primaryHover h-[64px] bg-primary rounded-border10 flex items-center justify-center text-white text-xl font-medium ${className}`}
		>
			{children}
		</button>
	);
};

export default AuthButton;

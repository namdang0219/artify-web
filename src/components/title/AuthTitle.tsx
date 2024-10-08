import React from "react";

interface IAuthTitle {
	children: string;
	className?: string;
}

const AuthTitle = ({ children, className = "" }: IAuthTitle) => {
	return (
		<h1 className={`text-[36px] font-medium text-center text-primary ${className}`}>
			{children}
		</h1>
	);
};

export default AuthTitle;
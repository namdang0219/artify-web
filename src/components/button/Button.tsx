import React, { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = ({ children, ...props }) => {
	return (
		<button {...props} className="h-[40px] px-4 rounded-round10 text-white hover:bg-primary-hover transition-all bg-primary">
			{children}
		</button>
	);
};

export default Button;

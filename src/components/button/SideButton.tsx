import React, { ReactNode } from "react";

const SideButton = ({
	children,
	className = "",
	contentClassName = "",
	icon = <></>,
	onClick = () => {},
}: {
	children: string;
	className?: string;
	contentClassName?: string;
	icon?: ReactNode;
	onClick?: () => void;
}) => {
	return (
		<button
			className={`block py-3 px-3 w-full rounded-border10 ${className}`}
			onClick={onClick}
		>
			<div className={`flex items-center gap-2 ${contentClassName}`}>
				{icon && <span>{icon}</span>}
				<span>{children}</span>
			</div>
		</button>
	);
};

export default SideButton;

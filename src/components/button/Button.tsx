import { FC } from "react";

interface ButtonProps {
	children: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	children,
	onClick = () => null,
	...props
}) => {
	return (
		<button
			{...props}
			onClick={onClick}
			className="h-[40px] px-4 rounded-round10 text-white hover:bg-primary-hover transition-all bg-primary"
		>
			{children}
		</button>
	);
};

export default Button;

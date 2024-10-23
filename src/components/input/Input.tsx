import { FC } from "react";

const Input: FC<{ placeholder: string; className?: string }> = ({
	placeholder = "Enter placeholder",
	className = "",
}) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={`${className} h-[40px] rounded-round10 outline-none px-4 bg-gray-100`}
		/>
	);
};

export default Input;

import { IconEye, IconEyeSlash } from "components/icon/auth";
import React, { useState } from "react";

interface IAuthInput {
	label: string;
	name: string;
	error?: string;
	register: any;
	type?: "text" | "password";
}

const AuthInput = ({
	label = "Label",
	type = "text",
	name = "",
	error = "",
	register,
}: IAuthInput) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<div className="relative">
			<div className="bg-white px-2.5 absolute left-3.5 -translate-y-1/2 rounded-md">
				<label htmlFor={name} className="text-lg text-primary">
					{label}
				</label>
			</div>
			<input
				id={name}
				type={
					type === "password"
						? showPassword
							? "text"
							: "password"
						: type
				}
				autoCapitalize="off"
				autoCorrect="off"
				autoComplete="off"
				className="w-full h-[60px] outline-none border border-primary rounded-border10 text-lg px-5"
				{...register(name)}
			/>
			<span className="absolute text-sm text-error right-4 -bottom-6">
				{error}
			</span>
			{type === "password" && (
				<span
					className="absolute -translate-y-1/2 cursor-pointer text-lightGray top-1/2 right-6"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <IconEye /> : <IconEyeSlash />}
				</span>
			)}
		</div>
	);
};

export default AuthInput;

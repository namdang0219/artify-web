import React from "react";

interface IAuthInput {
	label: string;
	name: string;
	error?: string;
}

const AuthInput = ({ label = "Label", name = "", error = "" }: IAuthInput) => {
	return (
		<div className="relative">
			<div className="bg-white px-2.5 absolute left-3.5 -translate-y-1/2">
				<label htmlFor={name} className="text-primary text-xl">
					{label}
				</label>
			</div>
			<input
				type="text"
				id={name}
				className="w-full h-[65px] outline-none border border-primary rounded-border10 text-lg px-5"
			/>
			<span className="absolute text-error text-sm right-4 -bottom-6">{error}</span>
		</div>
	);
};

export default AuthInput;

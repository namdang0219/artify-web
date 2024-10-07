"use client";
import { AuthTitle } from "@/components/title";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { IAuth } from "../signup/page";
import { AuthInput } from "@/components/input";
import { AuthButton } from "@/components/button";
import { IconFacebook, IconGoogle } from "@/components/icon/auth";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters long")
		.max(14, "Password must be at most 14 characters long")
		.required("Password is required"),
});

const LoginPage = () => {
	const { push } = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IAuth>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(validationSchema),
		mode: "onChange",
	});

	const handleLogin = (values: IAuth) => {
		console.log(values);
	};

	return (
		<div className="flex flex-col justify-between flex-1 px-10">
			<form onSubmit={handleSubmit(handleLogin)}>
				{/* Top Section  */}
				<div>
					<AuthTitle>ログイン</AuthTitle>
					<div className="mt-[75px] space-y-9">
						<AuthInput
							label="Email"
							name="email"
							error={errors.email?.message}
							register={register}
						/>
						<AuthInput
							label="Password"
							name="password"
							type="password"
							error={errors.password?.message}
							register={register}
						/>
					</div>
					<AuthButton className="mt-10">Login</AuthButton>
					<div className="mt-6 text-center">
						{"Haven't an account? "}
						<span
							className="font-semibold cursor-pointer text-primary hover:underline"
							onClick={() => push("/signup")}
						>
							Sign Up
						</span>
					</div>
				</div>
			</form>
			{/* Bottom Section  */}
			<div className="flex gap-10 h-[70px] text-black text-xl">
				<div className="flex items-center justify-center flex-1 gap-3 transition-all border cursor-pointer border-primary hover:text-white rounded-border10 hover:bg-primary">
					<IconGoogle />
					<span>Google</span>
				</div>
				<div className="flex items-center justify-center flex-1 gap-3 transition-all border cursor-pointer border-primary hover:text-white rounded-border10 hover:bg-primary">
					<IconFacebook />
					<span>Facebook</span>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

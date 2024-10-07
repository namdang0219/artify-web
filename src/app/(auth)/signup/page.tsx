"use client";
import { AuthButton } from "@/components/button";
import { IconFacebook, IconGoogle } from "@/components/icon/auth";
import { AuthInput } from "@/components/input";
import { AuthTitle } from "@/components/title";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export type IAuth = {
	email: string;
	password: string;
};

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters long")
		.max(14, "Password must be at most 14 characters long")
		.required("Password is required"),
	cpassword: Yup.string()
		.min(6, "Password must be at least 6 characters long")
		.max(14, "Password must be at most 14 characters long")
		.required("Confirm Password is required"),
});

const SignupPage = () => {
	const { push } = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IAuth & { cpassword: string }>({
		defaultValues: {
			email: "",
			password: "",
			cpassword: "",
		},
		resolver: yupResolver(validationSchema),
		mode: "onChange",
	});

	const handleSignup = (values: IAuth & { cpassword: string }) => {
		console.log(values);
	};

	return (
		<div className="flex flex-col justify-between flex-1 px-10">
			<form onSubmit={handleSubmit(handleSignup)}>
				{/* Top Section  */}
				<div>
					<AuthTitle>新規登録</AuthTitle>
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
						<AuthInput
							label="Confirm Password"
							name="cpassword"
							type="password"
							error={errors.cpassword?.message}
							register={register}
						/>
					</div>
					<AuthButton className="mt-10">Sign Up</AuthButton>
					<div className="mt-6 text-center">
						Already have an account?{" "}
						<span
							className="font-semibold cursor-pointer text-primary hover:underline"
							onClick={() => push("/login")}
						>
							Login
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

export default SignupPage;

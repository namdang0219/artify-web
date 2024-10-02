import React from "react";
import AuthLayout from "../../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { AuthButton } from "components/button";
import { AuthInput } from "components/input";
import { AuthTitle } from "components/title";
import { useNavigate } from "react-router-dom";
import { IconFacebook, IconGoogle } from "components/icon/auth";
import { IAuth } from "./SignupPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters long")
		.max(14, "Password must be at most 14 characters long")
		.required("Password is required"),
});

const LoginPage = () => {
	const navigate = useNavigate();
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
		<AuthLayout>
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="px-[100px] py-[80px] flex flex-col justify-between flex-1"
			>
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
						Haven't an account?{" "}
						<span
							className="font-semibold cursor-pointer text-primary hover:underline"
							onClick={() => navigate("/signup")}
						>
							Sign Up
						</span>
					</div>
				</div>

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
			</form>
		</AuthLayout>
	);
};

export default LoginPage;

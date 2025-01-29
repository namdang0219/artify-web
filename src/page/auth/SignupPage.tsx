import { Button, Form, FormProps, Input } from "antd";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "firebaseConfig";
import { useNavigate } from "react-router-dom";

type FieldType = {
	username?: string;
	password?: string;
	email?: string;
};
const SignupPage = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		if (!values.email || !values.password || !values.username) {
			return;
		}
		try {
			setLoading(true);
			const userCre = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			if (userCre) {
				// add usre to database
				await updateProfile(auth.currentUser as any, {
					displayName: values.username,
				});
				navigate("/community");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="w-screen h-screen flex-center">
			<div className="w-[500px] shadow-2xl p-5 rounded-2xl">
				<div className="mb-10 text-2xl font-medium text-center">
					Sign Up
				</div>
				<Form
					name="basic"
					labelCol={{ span: 5 }}
					wrapperCol={{ span: 19 }}
					onFinish={onFinish}
					style={{ maxWidth: 600 }}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label="名前"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item<FieldType>
						label="メール"
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input type="email" />
					</Form.Item>
					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item label={null} className="ml-[95px]">
						<Button
							type="primary"
							htmlType="submit"
							loading={loading}
						>
							登録
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default SignupPage;

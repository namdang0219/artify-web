import { Button, Form, FormProps, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";

type FieldType = {
	email?: string;
	password?: string;
};

const LoginPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
		loginUser(values);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};

	async function loginUser(values: FieldType) {
		try {
			setLoading(true);
			if (!values.email || !values.password) return;
			await signInWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);

			setLoading(false);
			toast.success("ログイン完了");
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error("ログイン失敗");
		}
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="p-5 shadow-2xl rounded-xl">
				<h1 className="mb-6 text-2xl font-semibold text-center">ログイン</h1>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label="Email"
						name="email"
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

					<Form.Item label={null}>
						<Button
							type="primary"
							htmlType="submit"
							loading={loading}
						>
							ログイン
						</Button>
					</Form.Item>

					<button
						onClick={() => navigate("/signup")}
						className="block px-4 py-2 mx-auto text-sm text-white transition-all rounded hover:bg-primary-hover bg-primary"
					>
						登録ページへ
					</button>
				</Form>
			</div>
		</div>
	);
};

export default LoginPage;

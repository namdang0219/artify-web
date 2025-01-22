import { Button, Form, FormProps, Input } from "antd";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	User,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

type FieldType = {
	username?: string;
	email?: string;
	password?: string;
};

const Signup = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
		createUser(values);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};

	async function addUserToDB(user: User) {
		try {
			const newUser = {
				uid: user.uid,
				username: user.displayName,
				email: user.email,
				createAt: Date.now(),
			};
			await setDoc(doc(db, "users", user.uid), newUser);
			toast.success("ユーザー追加成功");
		} catch (error) {
			console.log(error);
			toast.error("ユーザー追加失敗");
		}
	}

	async function createUser(values: FieldType) {
		try {
			setLoading(true);
			if (!values.email || !values.password || !values.username) return;
			const userCrediental = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);

			if (userCrediental) {
				await updateProfile(userCrediental.user, {
					displayName: values.username,
				});
				await addUserToDB(userCrediental.user);
			}

			setLoading(false);
			toast.success("登録完了");
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error("登録失敗");
		}
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="p-5 shadow-2xl rounded-xl">
				<h1 className="mb-6 text-2xl font-semibold text-center">
					登録
				</h1>
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
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input />
					</Form.Item>

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
							Submit
						</Button>
					</Form.Item>

					<button
						onClick={() => navigate("/login")}
						className="block px-4 py-2 mx-auto text-sm text-white transition-all rounded hover:bg-primary-hover bg-primary"
					>
						ログインページへ
					</button>
				</Form>
			</div>
		</div>
	);
};

export default Signup;

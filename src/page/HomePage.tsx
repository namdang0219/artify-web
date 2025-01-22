import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input, Modal, Select, Space } from "antd";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import MainLayout from "../components/layout/MainLayout";

type formType = {
	title: string;
	description: string;
	course: string;
};

export type IComment = {
	userId: string;
	username: string;
	photoURL: string;
	content: string;
};

export type ILive = {
	liveId: string;
	courseId: string;
	author: string;
	title: string;
	description: string;
	startTime: number;
	comment: IComment[];
};

const HomePage = () => {
	const { currentUser } = useAuth();
	const [creatingLive, setCreatingLive] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const [userData, setUserData] = useState<any>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			setLoading(true);
			const docRef = doc(db, "users", String(currentUser?.uid));
			const userDoc = await getDoc(docRef);
			setUserData(userDoc.data() as any);
			setLoading(false);
		};
		getUser();
	}, [currentUser]);

	const [form] = Form.useForm();

	const onCourseChange = (value: string) => {
		switch (value) {
			case "折り紙基礎":
				break;
			case "キャンドル作り基礎":
				break;
			default:
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	async function onFinish(values: formType) {
		console.log(values);
		try {
			setCreatingLive(true);
			const timeStamp = Date.now();
			const newLive: ILive = {
				liveId: String(timeStamp),
				courseId: values.course,
				author: currentUser?.uid as string,
				title: values.title,
				description: values.description,
				startTime: timeStamp,
				comment: [],
			};
			await setDoc(doc(db, "lives", String(timeStamp)), newLive);
			toast.success("新しいライブが開始されました");
			setCreatingLive(false);
			setIsModalOpen(false);
			form.resetFields();
			navigate(`/live/${timeStamp}`);
		} catch (error) {
			toast.error("新しいライブの開始が失敗しました");
			setCreatingLive(false);
		}
	}

	const onReset = () => {
		form.resetFields();
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	return (
		<MainLayout>
			<div className="flex items-center justify-center h-[600px]">
				{loading ? (
					<div className="loader"></div>
				) : userData?.role === "TEACHER" ? (
					<Button type="primary" onClick={showModal}>
						クラス開く
					</Button>
				) : (
					<div>ユーザーアカウント</div>
				)}
				<Modal
					title="新しいオンラインクラスを作成"
					open={isModalOpen}
					footer={[]}
					onCancel={handleCancel}
				>
					<div className="mt-6">
						<Form
							form={form}
							name="control-hooks"
							onFinish={onFinish}
							style={{ maxWidth: 600 }}
						>
							<Form.Item
								name="title"
								label="タイトル"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								name="description"
								label="説明"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								name="course"
								label="コース"
								rules={[{ required: true }]}
							>
								<Select
									placeholder="開催するコースを選択してください"
									onChange={onCourseChange}
									allowClear
								>
									<Select.Option value="折り紙基礎">
										折り紙基礎
									</Select.Option>
									<Select.Option value="キャンドル作り基礎">
										キャンドル作り基礎
									</Select.Option>
									{/* <Option value="other">other</Option> */}
								</Select>
							</Form.Item>
							<Form.Item>
								<Space>
									<Button
										type="primary"
										htmlType="submit"
										loading={creatingLive}
									>
										開始
									</Button>
									<Button htmlType="button" onClick={onReset}>
										Reset
									</Button>
								</Space>
							</Form.Item>
						</Form>
					</div>
				</Modal>
			</div>
		</MainLayout>
	);
};

export default HomePage;

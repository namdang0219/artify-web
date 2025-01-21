import { Button, Form, Input, Modal, Select, Space } from "antd";
import { Button as MyButton } from "components/button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "firebaseConfig";
import MainLayout from "layout/MainLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "store/configureStore";

type IComment = {
	userId: string;
	username: string;
	photoURL: string;
	content: string;
};

type ILive = {
	liveId: string;
	courseId: string;
	author: string;
	title: string;
	description: string;
	startTime: number;
	comment: IComment[];
};

const OnlineLearningPage = () => {
	const { photoURL } = useSelector((state: RootState) => state.user);
	const [creatingLive, setCreatingLive] = useState(false);
	const [isLiving, setIsLiving] = useState(false);

	const courseMock = {
		title: "Learn JavaScript Basics",
		description:
			"Having taken singing lessons since kindergarten,[3] in 2002, Suzuki auditioned for Hello! Project Kids with the song 'Kimochi wa Tsutawaru' by BoA. Her audition tape was aired on Morning Musume's variety show Hello! Morning.[4] She was placed in the group with 14 other girls.[5][6][7] She made her first appearance as an angel in the 2002 film Mini Moni ja Movie: Okashi na Daibōken!;[8] she also was one of the featured artists in the movie's ending song as a member of 4Kids.[9]",
		author: "John Doe",
		duration: "1h 30m",
	};

	// handle modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		// setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		// onFinish();
	};

	// handle form
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

	async function onFinish(values: any) {
		try {
			setCreatingLive(true);
			const timeStamp = Date.now();
			const newLive: ILive = {
				liveId: String(timeStamp),
				courseId: "12345",
				author: "user123",
				title: values.title,
				description: values.description,
				startTime: timeStamp,
				comment: [],
			};
			await setDoc(doc(db, "lives", String(timeStamp)), newLive);
			toast.success("新しいライブが開始されました");
			setCreatingLive(false);
			setIsModalOpen(false);
			setIsLiving(true);
		} catch (error) {
			toast.error("新しいライブの開始が失敗しました");
			setCreatingLive(false);
		}
	}

	const onReset = () => {
		form.resetFields();
	};

	return isLiving ? (
		<MainLayout>
			<div className="content-layout learning-layout">
				{/* main container  */}
				<div>
					{/* video container  */}
					<div className="w-full overflow-hidden aspect-video rounded-round10"></div>
					<div className="px-5 py-3">
						<div>
							<h2 className="text-[26px] font-semibold line-clamp-1">
								{courseMock.title}
							</h2>
							<p className="text-darkGray">
								Author: {courseMock.author}
							</p>
							<p className="mt-2 line-clamp-2">
								{courseMock.description}
							</p>
						</div>
					</div>
				</div>

				{/* right side bar  */}
				<div className="relative flex">
					<div
						className={`flex-1 flex sticky top-0 flex-col border border-lightGray rounded-round10 h-[calc(100vh-100px)]`}
					>
						<div className="flex-1"></div>
						<div className="h-[66px] flex items-center gap-2 px-3.5 border-t border-t-lightGray">
							<div className="size-[30px] rounded-full overflow-hidden shrink-0">
								<img
									src={photoURL}
									alt="avatar"
									className="object-cover object-center w-full h-full"
								/>
							</div>
							<input
								placeholder="Write a comment..."
								className="flex-1 block py-2 border-b outline-none border-b-gray-200 shrink-0"
							/>
							<button className="p-2 text-white rounded-full shrink-0 size-9 bg-primary hover:bg-primary-hover flex-center">
								<IconSend />
							</button>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	) : (
		<MainLayout>
			{/* modal  */}
			<Modal
				title="新規オンラインクラス"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[]}
			>
				<div className="pt-6">
					<Form
						// {...layout}
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
							name="Course"
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
									作成
								</Button>
								<Button htmlType="button" onClick={onReset}>
									リセット
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</div>
			</Modal>

			<div className="content-layout learning-layout">
				<MyButton onClick={showModal}>オンラインクラス</MyButton>
			</div>
		</MainLayout>
	);
};

export const IconSend = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={18}
			height={18}
			viewBox="0 0 48 48"
		>
			<path
				fill="currentColor"
				d="M7.262 4.244c-1.787-.893-3.765.812-3.146 2.711L8.13 19.26a2 2 0 0 0 1.573 1.352l15.86 2.643c.835.14.835 1.34 0 1.48L9.704 27.378a2 2 0 0 0-1.573 1.352L4.116 41.042c-.62 1.9 1.359 3.605 3.146 2.712l35.494-17.742c1.659-.83 1.659-3.197 0-4.026z"
			></path>
		</svg>
	);
};

export default OnlineLearningPage;

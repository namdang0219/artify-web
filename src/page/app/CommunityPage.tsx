import {
	FormProps,
	GetProp,
	Modal,
	Select,
	SelectProps,
	Tag,
	Upload,
	UploadFile,
	UploadProps,
} from "antd";
import { Button } from "components/button";
import { Input } from "components/input";
import { ModalPost } from "components/modal";
import { useModal } from "context/modal-context";
import { IconFilter, IconTag } from "icon/community";
import MainLayout from "layout/MainLayout";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Button as AntdButton, Checkbox, Form, Input as AntdInput } from "antd";
import { toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "firebaseConfig";
import {
	arrayUnion,
	collection,
	doc,
	onSnapshot,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

type FieldType = {
	title: string;
	desc: string;
	tag: string[];
	images: string[];
};

type PostType = {
	postId: string;
	title: string;
	desc: string;
	userId: string;
	username: string;
	images: ImageType["imageId"][];
	createdAt: number;
	updatedAt: number;
	comments: CommentType[];
	tags: string[];
};

type ImageType = {
	imageId: string;
	url: string;
	userId: string;
};

type CommentType = {
	commentId: string;
	userId: string;
	username: string;
	photoURL: string[];
	content: string;
	createdAt: number;
};

type TagRender = SelectProps["tagRender"];

const CommunityPage = () => {
	const { openModal } = useModal();
	const [posts, setPosts] = useState<PostType[]>([]);
	const navigate = useNavigate();
	const [tag, setTag] = useState<
		"アート" | "彫刻" | "写真" | "編み物" | "陶芸" | "全て"
	>("全て");

	useEffect(() => {
		const collectionRef = collection(db, "posts");
		if (tag === "全て") {
			const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
				const documents = snapshot.docs.map((doc) => ({
					...doc.data(),
				}));
				setPosts(documents as PostType[]);
			});

			return unsubscribe;
		} else {
			const q = query(
				collectionRef,
				where("tags", "array-contains", tag)
			);

			const unsubscribe = onSnapshot(q, (snapshot) => {
				const documents = snapshot.docs.map((doc) => ({
					...doc.data(),
				}));
				setPosts(documents as PostType[]);
			});

			return unsubscribe;
		}
	}, [tag]);

	const tagMocks = ["アート", "彫刻", "写真", "編み物", "陶芸"];

	const lighterPastelColors = [
		"#FFDBDD", // Lighter Pastel Pink
		"#FFEFDD", // Lighter Pastel Peach
		"#FFFFDD", // Lighter Pastel Yellow
		"#DCFEE4", // Lighter Pastel Green
		"#DCF0FF", // Lighter Pastel Blue
		"#F0DDF2", // Lighter Pastel Lavender
		"#FFEDDE", // Lighter Pastel Apricot
		"#DAF5EB", // Lighter Pastel Mint
		"#E3E7F3", // Lighter Pastel Purple
		"#F9E2FD", // Lighter Pastel Lilac
	];

	function getRandomColor(colors: string[]) {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleOpenModal = () => {
		openModal(<ModalPost />);
	};

	// create post modal
	const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
	const [creatingPost, setCreatingPost] = useState(false);

	const showModal = () => {
		setIsCreatePostModalOpen(true);
	};

	const handleOk = () => {
		setIsCreatePostModalOpen(false);
	};

	const handleCancel = () => {
		setIsCreatePostModalOpen(false);
	};

	// create post handle here
	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		console.log("Success:", values);
		try {
			setCreatingPost(true);
			const timestamp = Date.now();
			const newPost: PostType = {
				postId: String(timestamp),
				title: values.title,
				desc: values.desc,
				userId: auth.currentUser?.uid as any,
				username: auth.currentUser?.displayName as any,
				comments: [],
				createdAt: timestamp,
				images: [],
				tags: values.tag,
				updatedAt: timestamp,
			};

			await setDoc(doc(db, "posts", `${timestamp}`), newPost);

			// create post logic here
			await handleUpload(String(timestamp));

			handleOk();
		} catch (error) {
			console.log(error);
		} finally {
			setCreatingPost(false);
		}
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};

	const options: SelectProps["options"] = [
		{ value: "アート" },
		{ value: "彫刻" },
		{ value: "写真" },
		{ value: "編み物" },
		{ value: "陶芸" },
	];

	const tagRender: TagRender = (props) => {
		const { label, value, closable, onClose } = props;
		const onPreventMouseDown = (
			event: React.MouseEvent<HTMLSpanElement>
		) => {
			event.preventDefault();
			event.stopPropagation();
		};
		return (
			<Tag
				color={getRandomColor(lighterPastelColors)}
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
			>
				<span className="text-black">{label}</span>
			</Tag>
		);
	};

	// image handle
	type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	async function handleUpload(docId: string) {
		try {
			const uploadPromises = fileList.map(async (file) => {
				const imageRef = ref(storage, `images/${file.name}`);

				await uploadBytes(imageRef, file as any);

				const url = await getDownloadURL(imageRef);

				await updateDoc(doc(db, "posts", docId), {
					images: arrayUnion(url),
				});
			});

			await Promise.all(uploadPromises);
			console.log("Tất cả ảnh đã được upload và cập nhật Firestore!");
		} catch (error) {
			console.error("Lỗi khi upload ảnh:", error);
		}
	}
	const props: UploadProps = {
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file) => {
			setFileList([...fileList, file]);

			return false;
		},
		fileList,
	};

	return (
		<MainLayout>
			<div className="relative pt-0 content-layout">
				{/* float button  */}
				<button
					onClick={showModal}
					className="bg-primary w-[80px] aspect-square z-[1000] rounded-full shadow-xl absolute bottom-12 right-12 flex-center"
				>
					<GoPlus color="white" size={40} />
				</button>

				<Modal
					open={isCreatePostModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={[]}
				>
					<h3 className="text-2xl text-center">新規投稿作成</h3>
					<div className="mt-10">
						<Form
							name="basic"
							style={{ maxWidth: 800 }}
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 20 }}
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item<FieldType>
								label="タイトル"
								name="title"
								rules={[
									{
										required: true,
										message: "タイトルを入力してください",
									},
								]}
							>
								<AntdInput />
							</Form.Item>

							<Form.Item<FieldType>
								label="説明"
								name="desc"
								rules={[
									{
										required: true,
										message: "説明文を入力してください",
									},
								]}
							>
								<AntdInput.TextArea />
							</Form.Item>

							<Form.Item<FieldType>
								label="タグ"
								name="tag"
								rules={[
									{
										required: true,
										message: "タグを選択してください",
									},
								]}
							>
								<Select
									mode="multiple"
									tagRender={tagRender}
									options={options}
									className="w-[83%]"
								/>
							</Form.Item>

							{/* image upload  */}
							<Form.Item<FieldType>
								label="写真"
								name="images"
								rules={[
									{
										required: true,
										message: "写真を選択してください",
									},
								]}
							>
								<Upload {...props}>
									<AntdButton icon={<UploadOutlined />}>
										選択
									</AntdButton>
								</Upload>
								{/* <AntdButton
									type="primary"
									onClick={handleUpload}
									disabled={fileList.length === 0}
									loading={uploading}
									style={{ marginTop: 16 }}
								>
									{uploading ? "Uploading" : "Start Upload"}
								</AntdButton> */}
							</Form.Item>

							{/* submit button  */}
							<Form.Item label={null} className="ml-[80px] mt-6">
								<AntdButton
									type="primary"
									htmlType="submit"
									loading={creatingPost}
								>
									投稿
								</AntdButton>
							</Form.Item>
						</Form>
					</div>
				</Modal>

				{/* header container  */}
				<div className="sticky top-0 z-50 flex items-center justify-between w-full py-4 bg-white">
					{/* tags container  */}
					<div className="flex items-center gap-2">
						<div className="flex-center gap-1.5">
							<IconTag />
							<span>Popular Tags:</span>
						</div>
						<div className="flex items-center gap-2">
							<span
								style={{
									backgroundColor:
										getRandomColor(lighterPastelColors),
								}}
								// @ts-ignore
								onClick={() => setTag("全て")}
								className="px-3.5 hover:text-primary select-none py-1.5 bg-opacity-10 rounded-md cursor-pointer"
							>
								全て
							</span>
							{tagMocks.map((item) => (
								<span
									key={item}
									style={{
										backgroundColor:
											getRandomColor(lighterPastelColors),
									}}
									// @ts-ignore
									onClick={() => setTag(item)}
									className="px-3.5 hover:text-primary select-none py-1.5 bg-opacity-10 rounded-md cursor-pointer"
								>
									{item}
								</span>
							))}
						</div>
					</div>

					{/* filter container  */}
					<div className="gap-14 flex-center">
						{/* search by text  */}
						<div>
							<Input
								placeholder="Search post..."
								className="w-[300px] mr-2"
							/>
							<Button>Search</Button>
						</div>

						{/* filter by category  */}
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-1.5">
								<IconFilter />
								<span>Filter:</span>
							</div>
							<div>
								<Select
									defaultValue="All"
									style={{ width: 120 }}
									onChange={handleChange}
									options={[
										{
											value: "all",
											label: "All",
										},
										{ value: "newest", label: "Newest" },
										{ value: "popular", label: "Popular" },
									]}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* content container  */}
				<div>
					<div className="grid grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-7">
						{posts.length > 0 &&
							posts.reverse().map((post: PostType) => (
								<div key={post.postId} className="group">
									<div
										onClick={handleOpenModal}
										className="w-full overflow-hidden cursor-pointer aspect-square rounded-round10"
									>
										<img
											src={post.images[0]}
											alt="post-cover-image"
											className="transition-all base-img group-hover:scale-105"
										/>
									</div>
									<div className="px-2.5 mt-3.5">
										<div className="flex items-center gap-2">
											<div
												className={`size-[32px] rounded-full overflow-hidden  flex-center`}
												style={{
													backgroundColor:
														getRandomColor(
															lighterPastelColors
														),
												}}
											>
												{post.username.slice(0, 1)}
											</div>
											<span className="text-lg font-semibold cursor-pointer">
												{post.username}
											</span>
										</div>
										<p className="mt-2 line-clamp-2">
											{post.desc}
										</p>
									</div>
								</div>
							))}
					</div>
					<div className="w-full h-8"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default CommunityPage;

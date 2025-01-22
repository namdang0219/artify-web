import { useParams } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import { useEffect, useRef, useState } from "react";
import {
	arrayUnion,
	collection,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IComment, ILive } from "./HomePage";
import { useAuth } from "../context/auth-context";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import Basics from "../components/Basics";

const LivePage = () => {
	const { liveId } = useParams();
	const [liveData, setLiveData] = useState<ILive | null>(null);
	const [loading, setLoading] = useState(false);
	const [authorData, setAuthorData] = useState<any>();
	const { currentUser } = useAuth();
	const [comment, setComment] = useState<string>("");
	const [liveComments, setLiveComments] = useState<IComment[]>([]);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "lives", String(liveId)), (doc) => {
			// @ts-ignore
			setLiveComments(doc.data().comment as IComment[]);
		});
		return () => {
			unsub();
		};
	}, []); // Empty dependency array means this runs only on mount/unmount

	const handleCommenting = async (e: any) => {
		e.preventDefault();
		if (comment.trim() === "") return;
		try {
			const commentData: IComment = {
				userId: currentUser?.uid as string,
				content: comment.trim(),
				photoURL: "",
				username: currentUser?.displayName as string,
			};
			const docRef = doc(db, "lives", String(liveData?.liveId));
			await updateDoc(docRef, {
				comment: arrayUnion(commentData),
			});
			setComment("");
			toast.success("コメントしました");
		} catch (error) {
			console.log(error);
			toast.error("コメント失敗しました");
		}
	};

	async function getLiveData() {
		try {
			setLoading(true);
			if (!liveId) return;
			const docRef = doc(db, "lives", liveId);
			const liveDoc = await getDoc(docRef);
			const liveData = liveDoc.data();
			setLiveData(liveData as ILive);
			if (liveData) await getAuthorData(liveData?.author as string);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	async function getAuthorData(authorId: string) {
		try {
			if (!liveId) return;
			const docRef = doc(db, "users", authorId);
			const authorDoc = await getDoc(docRef);
			setAuthorData(authorDoc.data() as any);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getLiveData();
	}, []);

	const commentsEndRef = useRef<HTMLDivElement | null>(null);
	const scrollToBottom = () => {
		commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
	}, [liveComments]);

	if (!currentUser) {
		return (
			<div className="h-[600px] flex items-center justify-center">
				ライブに参加するにはログインしてください
			</div>
		);
	}

	if (loading)
		return (
			<div className="h-[600px] flex items-center justify-center">
				データーを読み込み中
			</div>
		);

	if (!liveData)
		return (
			<div className="h-[600px] flex items-center justify-center">
				ライブが存在していません
			</div>
		);

	return (
		<MainLayout>
			<div className="content-layout learning-layout">
				{/* main container  */}
				<div>
					{/* video container  */}
					<div className="w-full relative overflow-hidden flex bg-black h-[600px] items-center justify-center rounded-lg rounded-round10">
						{liveId && <Basics liveId={liveId} />}
					</div>
					<div className="px-5 py-3">
						<div>
							<h2 className="text-[26px] font-semibold line-clamp-1">
								{liveData?.title}
							</h2>
							<p className="text-darkGray">
								Author: {authorData.username}
							</p>
							<p className="text-gray-400">
								{liveData?.description}
							</p>
						</div>
					</div>
				</div>

				{/* right side bar  */}
				<div className="relative flex">
					<div
						className={`flex-1 rounded-lg flex sticky top-0 flex-col border border-lightGray rounded-round10 h-[calc(100vh-100px)]`}
					>
						<div className="flex-1 overflow-y-scroll">
							{liveComments.length > 0 &&
								liveComments.map((item, index) => (
									<div key={index}>
										<div className="flex items-center gap-2 p-4">
											<div className="size-[30px] bg-gray-200 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
												{item.username.slice(0, 1)}
											</div>
											<p className="">
												<span>{item.content}</span>
											</p>
										</div>
									</div>
								))}
							{/* Element dùng để cuộn xuống cuối */}
							<div ref={commentsEndRef} />
						</div>
						<form className="h-[66px] flex items-center gap-2 px-3.5 border-t border-t-lightGray">
							<div className="size-[30px] bg-gray-200 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
								{currentUser?.displayName &&
									currentUser?.displayName.slice(0, 1)}
							</div>
							<input
								placeholder="Write a comment..."
								className="flex-1 block py-2 border-b outline-none border-b-gray-200 shrink-0"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
							<button
								onClick={(e) => handleCommenting(e)}
								type="submit"
								className="p-2 text-white rounded-full shrink-0 size-9 bg-primary hover:bg-primary-hover flex-center"
							>
								<IoSend />
							</button>
						</form>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default LivePage;

import { replyMocks } from "mock/replyMocks";
import ReplyItem from "./ReplyItem";
import { useState } from "react";

const CommentItem = ({ item }: { item: any }) => {
	const [showReply, setShowReply] = useState(false);

	return (
		<div className="flex gap-4">
			<div className="size-[30px] rounded-full shrink-0 overflow-hidden mt-2">
				<img
					src="https://images.unsplash.com/photo-1729206861574-32a7f8f763f6?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="avatar"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div>
				<div className="flex items-center gap-2">
					<p className="text-lg font-semibold">{item.author}</p>
					<span className="text-sm text-darkGray">
						{item.createAt}
					</span>
				</div>
				<p>{item.content}</p>

				{/* reply  */}
				<div className="mt-1">
					{/* comment tool  */}
					<div className="flex items-center gap-4 text-sm text-blue-500">
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={() => setShowReply(!showReply)}
						>
							<span className="hover:underline">Reply</span>
							<span>{item.reply.length}</span>
						</div>
						<span className="cursor-pointer hover:underline">
							Report
						</span>
					</div>

					{/* reply container  */}
					{showReply && (
						<div className="flex flex-col gap-4 mt-4">
							{replyMocks.length > 0 &&
								replyMocks
									.filter((r) => item.reply.includes(r.rid))
									.map((item) => (
										<ReplyItem key={item.rid} item={item} />
									))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CommentItem;

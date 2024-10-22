import React from "react";

const ReplyItem = ({ item }: { item: any }) => {
	return (
		<div>
			<div className="flex gap-4">
				<div className="size-[30px] rounded-full overflow-hidden shrink-0 mt-2">
					<img
						src="https://plus.unsplash.com/premium_photo-1728625485385-6f06613b2385?q=80&w=3415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="avatar-img"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div>
					<div className="flex items-center gap-2">
						<p className="text-base font-semibold">{item.author}</p>
						<span className="text-sm text-darkGray">{item.createAt}</span>
					</div>
					<p className="text-base">{item.content}</p>
					<span className="text-sm text-blue-500 cursor-pointer hover:underline">
						Report
					</span>
				</div>
			</div>
		</div>
	);
};

export default ReplyItem;

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogDetailModal = () => {
	const images = [
		"https://plus.unsplash.com/premium_photo-1674068280486-d1dedf4a56e8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1514192631-251f5f0b14f2?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1669646471632-9cd6b5cd9bd6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1663841374622-c331258362b0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<div className="bg-background-light dark:bg-background-dark grid select-none grid-cols-[760px_450px] h-[760px] rounded-border15 overflow-hidden">
			<div className="aspect-square rounded-border10 overflow-hidden">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					modules={[Navigation, Pagination]}
					pagination={{
						enabled: true,
						bulletActiveClass: "pagination-active",
						clickable: true,
					}}
					loop
					navigation
					className="w-full h-full"
				>
					{images.length > 0 &&
						images.map((i, index) => (
							<SwiperSlide key={index}>
								<div className="relative w-full h-full">
									<Image
										src={i}
										alt="blog-image"
										width={800}
										height={800}
										className="w-full h-full object-center object-cover"
									></Image>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className="py-8 scroll-container relative flex-1">
				<div className="flex flex-col gap-8">
					{Array(12)
						.fill(null)
						.map((_, index) => (
							<CommentItem key={index} />
						))}
				</div>
			</div>
		</div>
	);
};

const CommentItem = () => {
	return (
		<div className="flex gap-2 px-8">
			{/* commemt user image  */}
			<div className="size-[36px] rounded-full overflow-hidden relative shrink-0">
				<Image
					src={
						"https://images.unsplash.com/photo-1697731133066-a1b450b31725?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt="avatar"
					width={60}
					height={60}
					className="w-full h-full object-center object-cover"
				></Image>
			</div>
			{/* commemt user name and date  */}
			<div className="tracking-wider">
				<div className="flex items-center gap-2">
					<p className="font-medium text-lg">鈴木愛理</p>
					<span className="text-lightGray text-xs">2024-02-26</span>
				</div>
				<div>
					ネットワーク上でデータを転送する際、その経路を導き出すことをルーティングと呼びます。
				</div>

				{/* feature action  */}
				<div></div>
			</div>
		</div>
	);
};

export default BlogDetailModal;

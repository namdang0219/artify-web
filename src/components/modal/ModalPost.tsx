import { CommentItem } from "components/item";
import { commentMocks } from "mock/commentMocks";
import { IconSend } from "page/app/(learning)/OnlineLearningPage";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const ModalPost = () => {
	const { photoURL } = useSelector((state: RootState) => state.user);

	const photos = [
		"https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1729430432961-6bb8b8196fe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1729337502643-6cdd31eadd4f?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1726141123118-8d5ab8c387e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<div className="flex h-[800px]">
			<div className="h-[800px] w-[800px] rounded-round15 overflow-hidden select-none">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
				>
					{photos.length > 0 &&
						photos.map((p, index) => (
							<SwiperSlide key={index}>
								<div className="size-[800px]">
									<img
										src={p}
										alt="post-thumb"
										className="object-cover object-center w-full h-full"
									/>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className="w-[480px] bg-white flex-1 p-1">
				<div className="flex flex-col h-full">
					{/* comment field  */}
					<div className="flex flex-col flex-1 gap-4 mt-4 ml-2 max-h-[100%] overflow-y-auto scroll-custom px-3 py-4">
						{commentMocks.length > 0 &&
							commentMocks.map((c) => (
								<CommentItem key={c.cid} item={c} />
							))}
					</div>

					{/* your comment  */}
					<div className="flex items-center gap-3 px-4 py-2 h-14">
						<img
							src={photoURL}
							alt="avatar"
							className="size-[35px] rounded-full shrink-0 object-center object-cover"
						/>
						<input
							placeholder="Write a comment..."
							className="flex-1 block py-2 -mt-2 border-b outline-none border-b-darkGray shrink-0"
						/>
						<button className="p-2 text-white rounded-full shrink-0 size-9 bg-primary hover:bg-primary-hover flex-center">
							<IconSend />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPost;

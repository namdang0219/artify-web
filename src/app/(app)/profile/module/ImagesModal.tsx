import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImagesModal = () => {
	const images = [
		"https://plus.unsplash.com/premium_photo-1674068280486-d1dedf4a56e8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1514192631-251f5f0b14f2?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1669646471632-9cd6b5cd9bd6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1663841374622-c331258362b0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<div className="rounded-border15 bg-background-light dark:bg-background-dark overflow-hidden select-none size-[650px]">
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
	);
};

export default ImagesModal;

"use client";
import {
	IconComment,
	IconEye,
	IconHeartLine,
	IconShare,
} from "@/components/icon/profile";
import { Modal } from "@/components/modal";
import { useModal } from "@/context/modal-context";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const BlogTab = () => {
	const { showModal } = useModal();

	const handleShowImages = () => {
		showModal(
			<Modal
				modalPosition={{
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				overlay
			>
				<ImagesModal />
			</Modal>
		);
	};

	return (
		<div className="grid grid-cols-4 gap-4">
			{Array(6)
				.fill(null)
				.map((_, index) => (
					<div key={index}>
						<div
							onClick={handleShowImages}
							className="aspect-square relative cursor-pointer rounded-border10 overflow-hidden group"
						>
							<Image
								src={
									"https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								}
								alt="blog-image"
								width={400}
								height={400}
								className="w-full h-full object-center object-cover group-hover:scale-105 transition-all"
							></Image>

							{/* image overlay  */}
							<div className="absolute inset-0 bg-black bg-opacity-20 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center">
								<span className="text-gray-300">
									<IconEye />
								</span>
							</div>
						</div>
						<div className="p-2 flex items-center gap-2.5 transition-all">
							<span className="flex items-center gap-1 select-none cursor-pointer text-lightGray hover:text-black">
								<IconHeartLine></IconHeartLine>
								<span className="text-sm">2,069</span>
							</span>
							<span className="flex items-center gap-1 select-none cursor-pointer text-lightGray hover:text-black">
								<IconComment></IconComment>
								<span className="text-sm">205</span>
							</span>
							<span className="flex items-center gap-1 select-none cursor-pointer text-lightGray hover:text-black">
								<IconShare></IconShare>
								<span className="text-sm">4</span>
							</span>
						</div>
					</div>
				))}
		</div>
	);
};

const ImagesModal = () => {
	const images = [
		"https://plus.unsplash.com/premium_photo-1674068280486-d1dedf4a56e8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1514192631-251f5f0b14f2?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1669646471632-9cd6b5cd9bd6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1663841374622-c331258362b0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<div className="rounded-border15 overflow-hidden select-none size-[650px]">
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

export default BlogTab;

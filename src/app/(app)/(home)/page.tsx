"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomePage = () => {
	return (
		<div className=" mainSection">
			<h2 className="text-2xl font-medium">Home</h2>

			{/* course slide  */}
			<div className="w-[calc(100vw-260px-400px-(10px*3))] rounded-border10 overflow-hidden mt-2">
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					modules={[Autoplay, Navigation, Pagination]}
					autoplay={{ delay: 3000 }}
					pagination={{
						enabled: true,
						bulletActiveClass: "pagination-active",
						clickable: true,
					}}
					speed={1500}
					loop
					navigation
				>
					{adsCourses.length > 0 &&
						adsCourses.map((item: CourseType) => (
							<SwiperSlide key={item.id}>
								<SlideItem item={item} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

interface CourseType {
	id: number;
	banner: string;
}

const SlideItem = ({ item: { banner } }: { item: CourseType }) => {
	return (
		<div className="aspect-[3/1] relative">
			<Image
				src={banner}
				alt="slider-image"
				width={1200}
				height={1200}
				className="object-cover object-center w-full h-full rounded-border10"
			></Image>
		</div>
	);
};

const adsCourses: CourseType[] = [
	{
		id: 1,
		banner: "https://images.unsplash.com/photo-1592899416045-94f61653227b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		banner: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		banner: "https://images.unsplash.com/photo-1724744014262-64b09c07f421?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export default HomePage;

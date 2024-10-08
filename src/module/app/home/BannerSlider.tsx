import { CourseType } from "@/app/(app)/(home)/page";
import { SliderItem } from "@/components/item";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSlider = () => {
	return (
		<div className="overflow-hidden mainWidth rounded-border10">
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
							<SliderItem item={item} />
						</SwiperSlide>
					))}
			</Swiper>
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

export default BannerSlider;

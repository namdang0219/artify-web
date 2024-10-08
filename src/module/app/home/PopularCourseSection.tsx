import { CourseItem } from "@/components/item";
import { SectionTitle } from "@/components/title";
import { courseMocks } from "@/mock/courseMocks";
import { CourseType } from "@/types/CourseType";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularCourseSection = () => {
	return (
		<section>
			<SectionTitle buttonContent="全てのコース">人気なコース</SectionTitle>
			<div className="overflow-hidden mainWidth rounded-border10">
				<Swiper spaceBetween={10} slidesPerView={3}>
					{courseMocks.length > 0 &&
						[...courseMocks, ...courseMocks, ...courseMocks].map(
							(course: CourseType, index) => (
								<SwiperSlide key={index}>
									<CourseItem course={course}></CourseItem>
								</SwiperSlide>
							)
						)}
				</Swiper>
			</div>
		</section>
	);
};

export default PopularCourseSection;

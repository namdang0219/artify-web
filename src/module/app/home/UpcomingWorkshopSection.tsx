import { SectionTitle } from "@/components/title";
import { workshopMocks } from "@/mock/workshopMocks";
import { WorkshopType } from "@/types/WorkshopType";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const UpcomingWorkshopSection = () => {
	return (
		<section>
			<SectionTitle buttonContent="全てのワークショップ">
				開催予定のワークショップ
			</SectionTitle>
			<div className="overflow-hidden mainWidth rounded-border10">
				<Swiper
					spaceBetween={10}
					slidesPerView={2}
					slidesPerGroup={2}
					autoplay={{ delay: 3000 }}
					modules={[Autoplay]}
					loop
					speed={2000}
				>
					{workshopMocks.length > 0 &&
						[
							...workshopMocks,
							...workshopMocks,
							...workshopMocks,
						].map((workshop: WorkshopType, index) => (
							<SwiperSlide key={index}>
								<div className="relative aspect-video">
									<Image
										src={workshop.banner}
										alt="workshop-banner"
										width={400}
										height={400}
										className="object-cover object-center w-full h-full rounded-border10"
									></Image>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	);
};

export default UpcomingWorkshopSection;

"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import BannerSlider from "@/module/app/home/BannerSlider";
import PopularCourseSection from "../../../module/app/home/PopularCourseSection";
import UpcomingWorkshopSection from "../../../module/app/home/UpcomingWorkshopSection";

const HomePage = () => {
	return (
		<div>
			<BannerSlider />
			<PopularCourseSection />
			<UpcomingWorkshopSection />
		</div>
	);
};

export default HomePage;

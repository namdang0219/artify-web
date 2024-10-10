import { CourseType } from "@/types/CourseType";
import Image from "next/image";
import React from "react";

const SliderItem = ({ item: { banner } }: { item: CourseType }) => {
	return (
		<div className="aspect-[3/1] relative">
			<Image
				src={banner}
				alt="slider-image"
				width={1000}
				height={1000}
				className="object-cover object-center w-full h-full rounded-border10"
				priority
			></Image>
		</div>
	);
};

export default SliderItem;

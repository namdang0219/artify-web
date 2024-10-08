import { CourseType } from "@/types/CourseType";
import Image from "next/image";
import React from "react";

const CourseItem = ({ course }: { course: CourseType }) => {
	return (
		<div className="cursor-pointer select-none group">
			<div className="relative overflow-hidden aspect-video rounded-border10 group">
				<Image
					src={course.banner}
					alt="course-banner"
					width={300}
					height={300}
					className="object-cover object-center w-full h-full transition-all group-hover:scale-105"
				></Image>
			</div>
			<div className="p-2.5">
				<h3 className="text-lg font-bold line-clamp-2">{course.title}</h3>
				<p className="mt-0.5 text-gray-400 line-clamp-1 text-sm">
					{course.author && course.author?.length > 0 && course.author.join(", ")}
				</p>
				<div className="mt-0.5 flex items-center justify-between">
					{/* rating  */}
					<div className="flex items-center gap-2">
						<span>{`${course.rating}/5`}</span>
						<div className="flex items-center">
							{Array(5)
								.fill(5)
								.map((_, index) => (
									<span
										key={index}
										className={`${
											course?.rating && course?.rating >= index + 1
												? "text-yellow-500"
												: "text-lightGray"
										}`}
									>
										<IconStar />
									</span>
								))}
						</div>
					</div>
					{/* price  */}
					<div className="flex items-end gap-0.5">
						<span className="text-lightGray">
							{course.price === 0 ? null : "¥"}
						</span>
						<span className="text-xl font-medium">
							{course.price === 0 ? "無料" : course.price}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const IconStar = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={18}
			height={18}
			viewBox="0 0 1024 1024"
		>
			<path
				fill="currentColor"
				d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
			></path>
		</svg>
	);
};

export default CourseItem;

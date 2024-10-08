"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import BannerSlider from "@/module/app/home/BannerSlider";
import { SectionTitle } from "@/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const HomePage = () => {
	return (
		<div>
			{/* course slide  */}
			<BannerSlider></BannerSlider>

			{/* Top rated courses  */}
			<SectionTitle>人気なコース</SectionTitle>
			<div className="overflow-hidden mainWidth rounded-border10">
				<Swiper spaceBetween={10} slidesPerView={3}>
					{courseMocks.length > 0 &&
						[...courseMocks, ...courseMocks, ...courseMocks].map(
							(c: CourseType, index) => (
								<SwiperSlide
									key={index}
									className="cursor-pointer select-none group"
								>
									<div className="relative h-[200px] overflow-hidden rounded-border10 group">
										<Image
											src={c.banner}
											alt="course-banner"
											width={200}
											height={200}
											className="object-cover object-center w-full h-full transition-all group-hover:scale-105"
										></Image>
									</div>
									<div className="p-2.5">
										<h3 className="text-lg font-bold line-clamp-2">
											{c.title}
										</h3>
										<p className="mt-0.5 text-gray-400 line-clamp-1 text-sm">
											{c.author &&
												c.author?.length > 0 &&
												c.author.join(", ")}
										</p>
										<div className="mt-0.5 flex items-center justify-between">
											{/* rating  */}
											<div className="flex items-center gap-2">
												<span>{`${c.rating}/5`}</span>
												<div className="flex items-center">
													{Array(5)
														.fill(5)
														.map((_, index) => (
															<span
																key={index}
																className={`${
																	c?.rating &&
																	c?.rating >=
																		index +
																			1
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
													{c.price === 0 ? null : "¥"}
												</span>
												<span className="text-xl font-medium">
													{c.price === 0
														? "無料"
														: c.price}
												</span>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
						)}
				</Swiper>
			</div>

			{/* Upcoming Workshop  */}
			<SectionTitle>開催予定のワークショップ</SectionTitle>
			<div className="h-[1000px]"></div>
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

const courseMocks: CourseType[] = [
	{
		id: 1,
		banner: "https://images.unsplash.com/photo-1727053850611-8351da50cff9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Reactで学ぶWebサイト制作入門, 簡単で色々な作業ができるサイト",
		subTitle: "Reactを使って��単なWebサイトを作りながら学��",
		description:
			"Reactを使って簡単なWebサイトを作りながら学習します。JavaScriptやHTML/CSSの基本を習得し、Reactの コンポー��ントとルー��ィング機能を使ってWebサイトを構��します。",
		author: ["MeowCopter"],
		rating: 3,
		price: 12000,
		tag: ["React", "TypeScript", "NodeJs"],
	},
	{
		id: 2,
		banner: "https://images.unsplash.com/photo-1727434032765-9c4df88b6e02?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Reactで学ぶWebサイト制作入門, Reactive Animation",
		subTitle: "Reactを使って��単なWebサイトを作りながら学��",
		description:
			"Reactを使って簡単なWebサイトを作りながら学習します。JavaScriptやHTML/CSSの基本を習得し、Reactの コンポー��ントとルー��ィング機能を使ってWebサイトを構��します。",
		author: ["MeowCopter", "Admin"],
		rating: 4,
		price: 14000,
		tag: ["React", "TypeScript", "NodeJs"],
	},
	{
		id: 3,
		banner: "https://images.unsplash.com/photo-1728209228772-76351edd20b1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Reactで学ぶWebサイト制作入門 - Code Learning is not difficult!!!",
		subTitle: "Reactを使って��単なWebサイトを作りながら学��",
		description:
			"Reactを使って簡単なWebサイトを作りながら学習します。JavaScriptやHTML/CSSの基本を習得し、Reactの コンポー��ントとルー��ィング機能を使ってWebサイトを構��します。",
		author: ["MeowCopter"],
		rating: 5,
		price: 0,
		tag: ["React", "TypeScript", "NodeJs"],
	},
];

export interface CourseType {
	id: number;
	banner: string;
	title?: string;
	subTitle?: string;
	description?: string;
	author?: string[];
	rating?: number;
	price?: number;
	tag?: string[];
}

export default HomePage;

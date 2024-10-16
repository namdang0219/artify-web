import React from "react";
import { Inria_Serif } from "next/font/google";
import SearchBar from "./topbar/SearchBar";
import TopbarProfile from "./topbar/TopbarProfile";

const inriaSerif = Inria_Serif({
	subsets: ["latin"],
	display: "swap",
	weight: ["700"],
});

const Topbar = () => {
	return (
		<header className="h-[60px] bg-primary flex items-center px-5 justify-between rounded-b-md">
			<div className="flex items-center justify-center">
				<h1
					className={`${inriaSerif.className} font-bold text-3xl text-white w-[250px]`}
				>
					🎨Artify
				</h1>
				<div className="flex items-center gap-8 text-white">
					<button className="flex items-center gap-1 opacity-75 hover:opacity-100">
						<span>コース</span>
						<IconDown />
					</button>
					<button className="opacity-75 hover:opacity-100">ワークショップ</button>
					<button className="opacity-75 hover:opacity-100">コンテスト</button>
				</div>
			</div>
			<SearchBar></SearchBar>
			<TopbarProfile></TopbarProfile>
		</header>
	);
};

const IconDown = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={28}
			height={28}
			viewBox="0 0 16 16"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default Topbar;

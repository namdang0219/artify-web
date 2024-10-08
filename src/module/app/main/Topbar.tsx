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
			<h1
				className={`${inriaSerif.className} font-bold text-3xl text-white`}
			>
				Artify
			</h1>
			<SearchBar></SearchBar>
			<TopbarProfile></TopbarProfile>
		</header>
	);
};

export default Topbar;

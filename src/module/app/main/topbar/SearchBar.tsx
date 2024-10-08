import React from "react";

const SearchBar = () => {
	return (
		<div className="relative h-[42px] bg-white w-full max-w-[500px] rounded-border10 flex items-center pl-4 py-[3px] pr-[3px] gap-2">
			<span className="text-lightGray">
				<IconSearch />
			</span>
			<input
				type="text"
				placeholder="Search course, teacher, ..."
				className="flex-1 outline-none placeholder-lightGray"
			/>
			<button className="flex items-center justify-center h-full aspect-square bg-primary rounded-[inherit] hover:bg-primaryHover">
				<span className="text-white">
					<IconSearch />
				</span>
			</button>
		</div>
	);
};

const IconSearch = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
	);
};

export default SearchBar;

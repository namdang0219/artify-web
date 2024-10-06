import React from "react";

const Search = () => {
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

			{/* search modal  */}
			<div className="absolute left-0 w-full h-[200px] top-[51px] rounded-[inherit] bg-white border border-gray-200">
				{SearchResultsMock.length === 0 ? (
					<div>No result found.</div>
				) : ( 
					<div>
						{SearchResultsMock.map((r, index) => (
							<div key={index}>
								<span>{r.result}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

const SearchResultsMock = [
	{ result: "Result 1" },
	{ result: "Result 1 anh khong doi qua" },
	{ result: "Result 1 khong quan tam" },
	{ result: "Result 1 chung ta cua hien tai" },
	{ result: "Result 1 dung lam trai tim anh dau" },
];

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

export default Search;

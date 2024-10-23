import { Select } from "antd";
import { Button } from "components/button";
import { Input } from "components/input";
import { IconFilter, IconTag } from "icon/community";
import MainLayout from "layout/MainLayout";

const CommunityPage = () => {
	const tagMocks = [
		"painting",
		"sculpture",
		"photography",
		"cinematography",
		"architecture",
	];

	const lighterPastelColors = [
		"#FFDBDD", // Lighter Pastel Pink
		"#FFEFDD", // Lighter Pastel Peach
		"#FFFFDD", // Lighter Pastel Yellow
		"#DCFEE4", // Lighter Pastel Green
		"#DCF0FF", // Lighter Pastel Blue
		"#F0DDF2", // Lighter Pastel Lavender
		"#FFEDDE", // Lighter Pastel Apricot
		"#DAF5EB", // Lighter Pastel Mint
		"#E3E7F3", // Lighter Pastel Purple
		"#F9E2FD", // Lighter Pastel Lilac
	];

	function getRandomColor(colors: string[]) {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<MainLayout>
			<div className="relative pt-0 content-layout">
				{/* header container  */}
				<div className="sticky top-0 z-50 flex items-center justify-between w-full py-4 bg-white">
					{/* tags container  */}
					<div className="flex items-center gap-2">
						<div className="flex-center gap-1.5">
							<IconTag />
							<span>Popular Tags:</span>
						</div>
						<div className="flex items-center gap-2">
							{tagMocks.map((item) => (
								<span
									key={item}
									style={{
										backgroundColor:
											getRandomColor(lighterPastelColors),
									}}
									className="px-3.5 hover:text-primary select-none py-1.5 bg-opacity-10 rounded-md cursor-pointer"
								>
									{item}
								</span>
							))}
						</div>
					</div>

					{/* filter container  */}
					<div className="gap-14 flex-center">
						{/* search by text  */}
						<div>
							<Input
								placeholder="Search post..."
								className="w-[300px] mr-2"
							/>
							<Button>Search</Button>
						</div>

						{/* filter by category  */}
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-1.5">
								<IconFilter />
								<span>Filter:</span>
							</div>
							<div>
								<Select
									defaultValue="All"
									style={{ width: 120 }}
									onChange={handleChange}
									options={[
										{
											value: "all",
											label: "All",
										},
										{ value: "newest", label: "Newest" },
										{ value: "popular", label: "Popular" },
									]}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* content container  */}
				<div>
					<div className="grid grid-cols-4 gap-x-5 gap-y-7">
						{Array(10)
							.fill(null)
							.map((_, index) => (
								<div key={index} className="group">
									<div className="w-full overflow-hidden cursor-pointer aspect-square rounded-round10">
										<img
											src="https://random-image-pepebigotes.vercel.app/api/random-image"
											alt="post-cover-image"
											className="transition-all base-img group-hover:scale-105"
										/>
									</div>
									<div className="px-2.5 mt-3.5">
										<div className="flex items-center gap-2">
											<div className="size-[32px] rounded-full overflow-hidden">
												<img
													src="https://picsum.photos/500"
													alt="avatar"
													className="base-img"
												/>
											</div>
											<span className="text-lg font-semibold cursor-pointer">
												MeowCopter
											</span>
										</div>
										<p className="mt-2 line-clamp-2">
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
											Repudiandae dolorem nisi eius odio
											qui, nam consequuntur ipsa obcaecati
											natus nostrum nihil veritatis
											impedit maiores vel rerum, sed esse
											unde. Aut!
										</p>
									</div>
								</div>
							))}
					</div>
					<div className="w-full h-8"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default CommunityPage;

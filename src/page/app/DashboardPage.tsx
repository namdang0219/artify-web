import { CommentItem } from "components/item";
import MainLayout from "layout/MainLayout";
import { commentMocks } from "mock/commentMocks";
import ReactPlayer from "react-player/lazy";

const DashboardPage = () => {
	const courseMock = {
		title: "Learn JavaScript Basics",
		description:
			"Having taken singing lessons since kindergarten,[3] in 2002, Suzuki auditioned for Hello! Project Kids with the song 'Kimochi wa Tsutawaru' by BoA. Her audition tape was aired on Morning Musume's variety show Hello! Morning.[4] She was placed in the group with 14 other girls.[5][6][7] She made her first appearance as an angel in the 2002 film Mini Moni ja Movie: Okashi na Daibōken!;[8] she also was one of the featured artists in the movie's ending song as a member of 4Kids.[9]",
		author: "John Doe",
		duration: "1h 30m",
	};

	return (
		<MainLayout>
			<div className="grid w-full grid-cols-[1fr_400px]">
				<div className="p-3">
					{/* video container  */}
					<div className="overflow-hidden bg-black rounded-round10">
						<div className="w-full max-w-[1200px] mx-auto aspect-video">
							<ReactPlayer
								url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
								controls
								width={"100%"}
								height={"100%"}
								playsinline
								pip
							/>
						</div>
					</div>

					<div className="px-5 py-3">
						<div>
							<h2 className="text-[26px] font-semibold line-clamp-1">
								{courseMock.title}
							</h2>
							<p className="text-darkGray">
								Author: {courseMock.author}
							</p>
							<p className="mt-2 line-clamp-2">
								{courseMock.description}
							</p>
						</div>

						{/* comment field  */}
						<div className="min-h-[calc(100vh/2)] mt-8">
							<p className="flex items-center gap-2">
								<span className="text-xl font-semibold">
									Comment
								</span>
								<span className="text-darkGray">{`(${commentMocks.length})`}</span>
							</p>
							<div className="flex flex-col gap-4 mt-2">
								{commentMocks.length > 0 &&
									commentMocks.map((c) => (
										<CommentItem key={c.cid} item={c} />
									))}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-pink-100"></div>
			</div>
		</MainLayout>
	);
};

export default DashboardPage;

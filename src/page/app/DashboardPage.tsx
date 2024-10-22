import { Button } from "components/button";
import { CommentItem } from "components/item";
import MainLayout from "layout/MainLayout";
import { commentMocks } from "mock/commentMocks";
import ReactPlayer from "react-player/lazy";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const DashboardPage = () => {
	const { photoURL } = useSelector((state: RootState) => state.user);

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
				{/* main container  */}
				<div className="px-5 py-3">
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
						<div className="mt-8">
							<p className="flex items-center gap-2">
								<span className="text-xl font-semibold">
									Comment
								</span>
								<span className="text-darkGray">{`(${commentMocks.length})`}</span>
							</p>

							{/* your comment  */}
							<div className="flex gap-4 mt-3">
								<div className="size-[40px] rounded-full overflow-hidden shrink-0">
									<img
										src={photoURL}
										alt="avatar"
										className="object-cover object-center w-full h-full"
									/>
								</div>
								<div className="flex flex-1 gap-2">
									<textarea
										placeholder="Write a comment..."
										rows={1}
										className="flex-1 block py-2 border-b border-b-darkGray shrink-0"
									/>
									<Button>Comment</Button>
								</div>
							</div>

							<div className="flex flex-col gap-4 mt-4 ml-2 pb-28">
								{commentMocks.length > 0 &&
									commentMocks.map((c) => (
										<CommentItem key={c.cid} item={c} />
									))}
							</div>
						</div>
					</div>
				</div>

				{/* right container  */}
				<div className="pt-3 pr-3">
					<div className="flex flex-col w-full h-full gap-5 overflow-hidden">
						{Array(8)
							.fill(null)
							.map((_, index) => (
								<div key={index}>
									<div className="flex gap-3 cursor-pointer group">
										<div className="overflow-hidden rounded w-28 aspect-video shrink-0">
											<img
												src="https://plus.unsplash.com/premium_photo-1728712590654-c2a8901c5a4a?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt="course-thumb"
												className="object-cover object-center w-full h-full transition-all group-hover:scale-[1.024]"
											/>
										</div>
										<div>
											<p className="line-clamp-2 group-hover:text-primary">
												Learn JavaScript Basics Learn
												JavaScript Basics
											</p>
											<p className="text-xs text-darkGray">
												MeowCopter Clone
											</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default DashboardPage;

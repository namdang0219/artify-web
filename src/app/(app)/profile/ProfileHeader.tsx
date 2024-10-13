import { IconLocation, IconLink } from "@/components/icon/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileHeader = () => {
	return (
		<div className="flex items-center gap-12 p-6 rounded-border10">
			{/* left container  */}
			<div className="flex flex-col gap-2">
				{/* image  */}
				<div className="relative w-[180px] h-[180px] rounded-full overflow-hidden">
					<Image
						src={
							"https://images.unsplash.com/photo-1500621679649-37b519bef4fd?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="profile-image"
						className="w-full h-full object-center object-cover"
						width={500}
						height={500}
						priority
					></Image>
				</div>

				{/* address  */}
				<div>
					{/* role  */}
					<div>
						<div className="mx-auto bg-green-500 text-white px-3 py-0.5 tracking-wider rounded w-fit text-sm">
							講師
						</div>
					</div>

					{/* location  */}
					<div className="flex items-center gap-1 justify-center mt-2">
						<span className="text-red-500">
							<IconLocation />
						</span>
						<span>日本、大阪</span>
					</div>
				</div>
			</div>

			{/* right container  */}
			<div className="flex-1 flex flex-col">
				{/* name and job  */}
				<div className="flex justify-between">
					{/* name and job  */}
					<div>
						<p className="text-4xl tracking-wider">永野芽郁</p>
						<p className="mt-2 text-lightGray inline-block">
							デザイナー
						</p>
					</div>

					{/* action button  */}
					<div className="flex gap-2">
						<button className="w-[100px] py-2 dark:text-gray-200 dark:border-gray-200 dark:hover:text-white h-fit border dark:hover:border-secondary border-secondary rounded-full text-secondary hover:text-white hover:bg-secondary transition-all">
							編集
						</button>
						<button className="w-[100px] py-2 h-fit dark:hover:text-gray-200 dark:hover:border-gray-200 border border-secondary bg-secondary dark:hover:bg-transparent text-white hover:text-secondary hover:bg-white rounded-full transition-all">
							シェア
						</button>
					</div>
				</div>

				{/* link  */}
				<div className="flex flex-col gap-1 mt-3.5 flex-1">
					<p className="flex items-center gap-2">
						<span className="text-lightGray inline-block">
							<IconLink></IconLink>
						</span>
						<Link
							href="https://www.instagram.com/mei_nagano0924official"
							className="text-blue-500 hover:underline line-clamp-1"
						>
							https://www.instagram.com/mei_nagano0924official
						</Link>
					</p>
					<p className="flex items-center gap-2">
						<span className="text-lightGray inline-block">
							<IconLink></IconLink>
						</span>
						<Link
							href="https://www.stardust.co.jp/talent/section1/naganomei/"
							className="text-blue-500 hover:underline line-clamp-1"
						>
							https://www.stardust.co.jp/talent/section1/naganomei/
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;

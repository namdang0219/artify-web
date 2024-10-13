"use client";
import React, { ReactNode, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import CertificationTab from "./CertificationTab";
import BlogTab from "./BlogTab";

interface ITabContent {
	tab: "Certification" | "Blog";
	component: ReactNode;
	name: string;
}

const ProfilePage = () => {
	const [tabContent, setTabContent] =
		useState<ITabContent["tab"]>("Certification");

	const handleDisplayTab = () => {
		switch (tabContent) {
			case "Certification":
				return <CertificationTab />;
			case "Blog":
				return <BlogTab />;
			default:
				return <CertificationTab />;
		}
	};

	return (
		<div className="flex-1 flex flex-col">
			{/* header  */}
			<ProfileHeader></ProfileHeader>

			{/* main container  */}
			<div className="flex-1 px-8">
				{/* tab area  */}
				<div className="border-b-[1px] pb-4 border-b-gray-200 dark:border-slate-700 flex items-center pl-10 gap-12">
					{tabList.map((tab) => (
						<button
							key={tab.tab}
							onClick={() => setTabContent(tab.tab)}
							className={`text-lightGray tracking-wider ${
								tabContent === tab.tab && "text-secondary"
							}`}
						>
							{tab.name}
						</button>
					))}
				</div>

				{/* content  */}
				<div className="pt-6">{handleDisplayTab()}</div>
			</div>
		</div>
	);
};

const tabList: ITabContent[] = [
	{ tab: "Blog", component: <BlogTab />, name: "ブログ" },
	{ tab: "Certification", component: <CertificationTab />, name: "証明書" },
];

export default ProfilePage;

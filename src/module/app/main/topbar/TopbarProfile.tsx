import { SideButton } from "@/components/button";
import {
	IconBell,
	IconHelp,
	IconLogout,
	IconMail,
	IconPrivacy,
	IconProfile,
} from "@/components/icon/topbar";
import { Modal } from "@/components/modal";
import { useModal } from "@/context/modal-context";
import { useRect } from "@/hook/useRect";
import Image from "next/image";
import React, { useRef } from "react";
import { useWindowSize } from "usehooks-ts";

const TopbarProfile = () => {
	const { showModal } = useModal();
	const profileBoxRef = useRef<HTMLDivElement>(null);
	const { elementRect } = useRect(profileBoxRef);
	const windowSize = useWindowSize();

	const handleShowProfileModal = () => {
		showModal(
			<Modal
				modalPosition={{
					top: elementRect?.bottom && elementRect?.bottom + 8,
					right:
						elementRect?.right &&
						windowSize.width - elementRect?.right,
				}}
			>
				<ProfileModal />
			</Modal>
		);
	};

	return (
		<div className="flex items-center gap-4">
			{/* email icon  */}
			<button className="flex items-center justify-center w-10 h-10 transition-all rounded-full group bg-primary hover:bg-primaryHover">
				<IconMail></IconMail>
			</button>

			{/* notification icon  */}
			<button className="flex items-center justify-center w-10 h-10 transition-all rounded-full group bg-primary hover:bg-primaryHover">
				<IconBell></IconBell>
			</button>

			{/* profile box  */}
			<div
				ref={profileBoxRef}
				onClick={handleShowProfileModal}
				className="h-[48px] p-1 rounded-border10 flex items-center bg-white bg-opacity-0 hover:bg-opacity-20 cursor-pointer"
			>
				<div className="ml-4 text-right text-white">
					<p className="text-sm font-semibold">MeowCopter</p>
					<p className="text-xs opacity-70">meow.admin@gmail.com</p>
				</div>
				<div className="relative h-full ml-2 aspect-square">
					<Image
						src={
							"https://images.unsplash.com/photo-1546358321-2754954c3a43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="avatar"
						width={100}
						height={100}
						className="object-cover object-center w-full h-full rounded-full"
					></Image>
				</div>
			</div>
		</div>
	);
};

const ProfileModal = () => {
	return (
		<div className="bg-white dark:bg-background-dark-main w-[240px] rounded-border15 dark:text-white border border-lightGray dark:border-gray-500 p-2">
			{profileModalOptions.map((option) => (
				<SideButton
					key={option.label}
					icon={option.icon}
					className="hover:bg-hoverGray dark:hover:bg-hoverGray-dark"
				>
					{option.label}
				</SideButton>
			))}
		</div>
	);
};

const profileModalOptions = [
	{
		label: "プロフィール",
		icon: <IconProfile />,
	},
	{
		label: "プライバシー",
		icon: <IconPrivacy />,
	},
	{
		label: "ヘルプ",
		icon: <IconHelp />,
	},
	{
		label: "ログアウト",
		icon: <IconLogout />,
	},
];

export default TopbarProfile;

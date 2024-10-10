"use client";
import {
	IconCommunity,
	IconDark,
	IconDefault,
	IconHome,
	IconLearn,
	IconLight,
	IconNote,
	IconSchedule,
	IconSetting,
} from "@/components/icon/navigation";
import Link from "next/link";
import React, { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { IGlobalState, setTheme } from "@/store/global/globalSlice";
import { useModal } from "@/context/modal-context";
import { useWindowSize } from "usehooks-ts";
import { useRect } from "@/hook/useRect";
import { SideButton } from "@/components/button";

const Navigation = () => {
	const pathname = usePathname();
	const { theme } = useAppSelector((state: RootState) => state.global);
	const { showModal } = useModal();
	const ref = useRef<HTMLButtonElement>(null);
	const { elementRect } = useRect(ref);

	const openThemeModal = () => {
		showModal(<ThemeModal elementRect={elementRect} />);
	};

	function renderThemeText(theme: IGlobalState["theme"]) {
		switch (theme) {
			case "default":
				return "デフォルト";
			case "light":
				return "ライト";
			case "dark":
				return "ダーク";
			default:
				return "デフォルト";
		}
	}

	function renderThemeIcon(theme: IGlobalState["theme"]) {
		switch (theme) {
			case "default":
				return <IconDefault />;
			case "light":
				return <IconLight />;
			case "dark":
				return <IconDark />;
			default:
				return <IconDefault />;
		}
	}

	return (
		<div className="flex flex-col mainSection">
			{/* navigation  */}
			<nav className="flex-1">
				<ul className="flex flex-col gap-0.5">
					{navList.map((n, index) => (
						<li key={index}>
							<Link href={n.path}>
								<SideButton
									className={`${
										pathname === n.path
											? "bg-secondary text-white"
											: "hover:bg-hoverGray dark:hover:bg-hoverGray-dark"
									}`}
									icon={n.icon}
								>
									{n.label}
								</SideButton>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* theme setting  */}
			<button
				className={`block py-3 px-3 relative rounded-border10 hover:bg-hoverGray dark:hover:bg-hoverGray-dark w-full mt-auto`}
				onClick={openThemeModal}
				ref={ref}
			>
				<div className="flex items-center justify-between">
					<div>
						<span className="mr-2.5">テーマ</span>
						<span className="text-lightGray">
							{renderThemeText(theme)}
						</span>
					</div>
					{renderThemeIcon(theme)}
				</div>
			</button>
		</div>
	);
};

const ThemeModal = ({ elementRect }: { elementRect: DOMRect | undefined }) => {
	const dispatch = useAppDispatch();
	const windowSize = useWindowSize();
	const { theme } = useAppSelector((state: RootState) => state.global);
	const { closeModal } = useModal();
	const handleChooseTheme = (theme: IGlobalState["theme"]) => {
		dispatch(setTheme(theme));
		closeModal();
	};

	return (
		<div
			style={{
				width: elementRect?.width,
				left: elementRect?.left,
				bottom: elementRect?.y && windowSize.height - elementRect?.y,
			}}
			className="absolute z-50 p-2 space-y-0.5 bg-white dark:bg-background-dark-main rounded-border10 border border-lightGray dark:border-gray-500"
		>
			{themeList.map((b) => (
				<SideButton
					key={b.theme}
					className={`${
						b.theme === theme
							? "bg-secondary text-white"
							: "hover:bg-hoverGray dark:hover:bg-hoverGray-dark text-dark dark:text-white"
					} flex-row-reverse`}
					contentClassName="flex-row-reverse justify-between"
					onClick={() => handleChooseTheme(b.theme)}
					icon={b.icon}
				>
					{b.label}
				</SideButton>
			))}
		</div>
	);
};

const themeList: {
	theme: IGlobalState["theme"];
	label: string;
	icon: ReactNode;
}[] = [
	{
		theme: "default",
		label: "デフォルト",
		icon: <IconDefault />,
	},
	{
		theme: "light",
		label: "ライト",
		icon: <IconLight />,
	},
	{
		theme: "dark",
		label: "ダーク",
		icon: <IconDark />,
	},
];

const navList = [
	{
		label: "ホーム",
		icon: <IconHome />,
		path: "/",
	},
	{
		label: "コミュニティー",
		icon: <IconCommunity />,
		path: "/community",
	},
	{
		label: "ノート",
		icon: <IconNote />,
		path: "/note",
	},
	{
		label: "学習",
		icon: <IconLearn />,
		path: "/learning",
	},
	{
		label: "スケジュール",
		icon: <IconSchedule />,
		path: "/schedule",
	},
	{
		label: "設定",
		icon: <IconSetting />,
		path: "/setting",
	},
];

export default Navigation;

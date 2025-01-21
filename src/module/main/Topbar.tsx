import { DIMENTIONS } from "constant/dimention";
import { INavigation } from "data/navigation";
import { topbarContent } from "data/topbar";
import useLanguage from "hook/useLanguage";
import { IconBell, IconMessage } from "icon/topbar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "store/configureStore";
import { Drawer } from "antd";
import { useState } from "react";
import { Button } from "components/button";
import { Input } from "components/input";

const Topbar = () => {
	const { displayName, email, photoURL } = useSelector(
		(state: RootState) => state.user
	);
	const navigate = useNavigate();
	const { label1: searchPlaceholder, label2: searchButton } = useLanguage([
		topbarContent.search.placeholder,
		topbarContent.search.buttonLabel,
	]);

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const TopbarLink = ({ pageLink }: { pageLink: INavigation }) => {
		const { label } = useLanguage(pageLink.label);

		return (
			<Link
				to={pageLink.href}
				className="flex items-center text-lg text-primary hover:underline"
			>
				<span>{label}</span>
				<span>{pageLink.icon}</span>
			</Link>
		);
	};

	return (
		<div
			className="flex items-center justify-between px-8 shrink-0"
			style={{ height: DIMENTIONS.HEADER_HEIGHT }}
		>
			{/* page link  */}
			<div className="flex items-center gap-8 ">
				{topbarContent.pageLinks.map((p: INavigation) => (
					<TopbarLink key={p.href} pageLink={p}></TopbarLink>
				))}
			</div>

			{/* search bar and signed in user  */}
			<div className="flex items-center gap-20">
				{/* search bar  */}
				<div className="flex items-center gap-2">
					<Input
						placeholder={searchPlaceholder}
						className="w-[400px]"
					/>
					<Button>{searchButton}</Button>
				</div>

				{/* profile  */}
				<div className="flex items-center gap-4">
					<div
						onClick={showDrawer}
						className="flex items-center justify-center transition-all bg-transparent rounded-full size-11 hover:text-white hover:bg-primary"
					>
						<IconBell></IconBell>
					</div>
					<div
						onClick={showDrawer}
						className="flex items-center justify-center transition-all bg-transparent rounded-full size-11 hover:text-white hover:bg-primary"
					>
						<IconMessage></IconMessage>
					</div>

					{/* profile field  */}
					<div className="flex items-center gap-2.5">
						<div className="text-right">
							<p className="font-semibold">{displayName}</p>
							<p className="text-sm text-gray-500">{email}</p>
						</div>
						<div
							className="size-[50px] rounded-full overflow-hidden"
							onClick={() => navigate("/profile")}
						>
							<img
								src={photoURL}
								alt="avatar"
								className="object-cover object-center w-full h-full cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>

			<Drawer
				title="Message"
				onClose={onClose}
				open={open}
				destroyOnClose
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
};

export default Topbar;

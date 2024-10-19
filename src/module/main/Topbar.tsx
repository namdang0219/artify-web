import { DIMENTIONS } from "constant/dimention";
import { INavigation } from "data/navigation";
import { topbarContent } from "data/topbar";
import useLanguage from "hook/useLanguage";
import { IconBell, IconMessage } from "icon/topbar";
import { Link } from "react-router-dom";

const Topbar = () => {
	const { label1: searchPlaceholder, label2: searchButton } = useLanguage([
		topbarContent.search.placeholder,
		topbarContent.search.buttonLabel,
	]);

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
			className="flex items-center justify-between px-8"
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
					<input
						type="text"
						placeholder={searchPlaceholder}
						className="w-[300px] h-[40px] rounded-round10 outline-none px-4"
					/>
					<button className="h-[40px] px-4 rounded-round10 text-white hover:bg-primary-hover transition-all bg-primary">
						{searchButton}
					</button>
				</div>

				{/* profile  */}
				<div className="flex items-center gap-4">
					<div className="flex items-center justify-center transition-all bg-transparent rounded-full size-11 hover:text-white hover:bg-primary">
						<IconBell></IconBell>
					</div>
					<div className="flex items-center justify-center transition-all bg-transparent rounded-full size-11 hover:text-white hover:bg-primary">
						<IconMessage></IconMessage>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="text-right">
							<p className="font-semibold">MeowCopter</p>
							<p className="text-sm text-gray-500">
								meowcopter@gmail.com
							</p>
						</div>
						<div className="size-[50px] rounded-full overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1515036813970-3beada24ab5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="avatar"
								className="object-cover object-center w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;

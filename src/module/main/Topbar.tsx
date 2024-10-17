import { DIMENTIONS } from "constant/dimention";
import { INavigation } from "data/navigation";
import { topbarContent } from "data/topbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store/reducer";

const Topbar = () => {
	const { language } = useSelector((state: RootState) => state.global);

	return (
		<div
			className="flex items-center justify-between px-12"
			style={{ height: DIMENTIONS.HEADER_HEIGHT }}
		>
			<div className="flex items-center gap-6 ">
				{topbarContent.pageLinks.map((p: INavigation) => (
					<Link key={p.href} to={p.href} className="text-primary text-lg hover:underline">
						{language === "en" ? p.label.en : p.label.ja}
					</Link>
				))}
			</div>
			<div></div>
		</div>
	);
};

export default Topbar;

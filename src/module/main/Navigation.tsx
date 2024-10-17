import { INavigation, navigations } from "data/navigation";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "store/reducer";

const Navigation = () => {
	const { language } = useSelector((state: RootState) => state.global);

	return (
		<div className="flex-1 p-4 flex flex-col gap-1">
			{navigations.map((n: INavigation) => (
				<NavLink
					key={n.href}
					to={n.href}
					className={({ isActive }) =>
						`p-4 rounded-round15 block ${
							isActive
								? "bg-white text-primary"
								: "text-white bg-primary hover:bg-primary-hover hover:bg-opacity-60"
						}`
					}
				>
					<div className="flex items-center gap-4">
						<span>{n.icon}</span>
						<span className="hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all">
							{language === "en" ? n.label.en : n.label.ja}
						</span>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Navigation;

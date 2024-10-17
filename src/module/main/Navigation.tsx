import { INavigation, navigations } from "data/navigation";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "store/reducer";

const Navigation = () => {
	const { language } = useSelector((state: RootState) => state.global);

	return (
		<div className="flex-1 p-2.5 flex flex-col gap-1">
			{navigations.map((n: INavigation) => (
				<NavLink
					key={n.href}
					to={n.href}
					className={({ isActive }) =>
						`p-4 rounded-round15 block relative group ${
							isActive
								? "bg-white text-primary"
								: "text-white bg-primary hover:bg-primary-hover hover:bg-opacity-60"
						}`
					}
				>
					<div className="flex items-center gap-4">
						<span>{n.icon}</span>
					</div>
					<span className="absolute hidden text-white rounded-md group-hover:block opacity-0 duration-1000 group-hover:opacity-100 -right-3 top-1/2  translate-x-[100%] -translate-y-1/2 p-2 whitespace-nowrap bg-gray-700">
						{language === "en" ? n.label.en : n.label.ja}
					</span>
				</NavLink>
			))}
		</div>
	);
};

export default Navigation;

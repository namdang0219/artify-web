import { DIMENTIONS } from "constant/dimention";
import Navigation from "./Navigation";

const Sidebar = () => {
	return (
		<div className="bg-primary group w-[90px] hover:w-[260px] min-h-screen transition-all absolute left-0 top-0 flex flex-col">
			<div
				className=" flex items-center px-4"
				style={{ height: DIMENTIONS.HEADER_HEIGHT }}
			>
				<span className="text-[28px]">🎨</span>
				<span className="text-[28px] text-white hidden opacity-0 group-hover:opacity-100 transition-all group-hover:block">
					Artify
				</span>
			</div>
			<Navigation />
		</div>
	);
};

export default Sidebar;

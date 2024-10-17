import { DIMENTIONS } from "constant/dimention";
import Navigation from "./Navigation";

const Sidebar = () => {
	return (
		<div className="bg-primary min-h-screen transition-all duration-100 absolute left-0 top-0 flex flex-col">
			<div
				className=" flex items-center px-2.5"
				style={{ height: DIMENTIONS.HEADER_HEIGHT }}
			>
				<span className="text-[28px]">🎨</span>
			</div>
			<Navigation />
		</div>
	);
};

export default Sidebar;

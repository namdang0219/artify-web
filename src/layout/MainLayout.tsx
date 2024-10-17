import Sidebar from "module/main/Sidebar";
import Topbar from "module/main/Topbar";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex relative w-screen min-h-screen">
			{/* absolute sidebar w-[90px]  */}
			<Sidebar />

			{/* navigation space  */}
			<div className="w-[90px] h-full"></div>

			{/* main container  */}
			<div className="flex-1 flex flex-col">
				<Topbar />
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
};

export default MainLayout;

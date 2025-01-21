import Sidebar from "module/main/Sidebar";
import Topbar from "module/main/Topbar";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="relative flex w-screen overflow-hidden">
			
			{/* absolute sidebar w-[90px]  */}
			<Sidebar />

			{/* navigation space  */}
			<div className="w-[80px]"></div>

			{/* main container  */}
			<div className="flex-1 bg-white">
				<Topbar />
				<div className="flex flex-1 h-[calc(100vh-65px)] overflow-y-auto">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainLayout;

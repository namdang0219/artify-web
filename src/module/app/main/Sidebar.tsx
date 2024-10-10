import { SideButton } from "@/components/button";
import { IconSupport } from "@/components/icon/sidebar";
import React from "react";

const Sidebar = () => {
	return (
		<div className="mainSection flex flex-col">
			<div className="flex-1">

			</div>
			<div>
				<SideButton
					className="dark:hover:bg-hoverGray-dark hover:bg-hoverGray"
					contentClassName="justify-center"
					icon={<IconSupport />}
				>
					コンサルタント
				</SideButton>
			</div>
		</div>
	);
};

export default Sidebar;

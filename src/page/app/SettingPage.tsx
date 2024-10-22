import MainLayout from "layout/MainLayout";
import { useState } from "react";

const SettingPage = () => {
	const [activeTab, setActiveTab] = useState<"Tab1" | "Tab2" | "Tab3">(
		"Tab1"
	);

	const renderTabContent = () => {
		switch (activeTab) {
			case "Tab1":
				return <Tab1 />;
			case "Tab2":
				return <Tab2 />;
			case "Tab3":
				return <Tab3 />;
			default:
				return null;
		}
	};

	const Tab1 = () => {
		return (
			<div className="flex justify-between">
				<span>Theme</span>
				<div className="flex items-center gap-2">
					{["light", "dark", "default"].map((item) => (
						<div key={item}>
							
						</div>
					))}
				</div>
			</div>
		);
	};
	const Tab2 = () => {
		return <div>Tab2</div>;
	};
	const Tab3 = () => {
		return <div>Tab3</div>;
	};

	return (
		<MainLayout>
			<div className="flex flex-1 p-5">
				<div className="w-full overflow-hidden max-w-[850px] rounded-round15 bg-white border shadow-lg border-gray-200 flex-1 mx-auto flex">
					<div className="w-[220px] border-r border-r-gray-200">
						<div className="flex flex-col gap-1 p-4">
							{["Tab1", "Tab2", "Tab3"].map((item: any) => (
								<div key={item}>
									<button
										onClick={() => setActiveTab(item)}
										className={`px-4 py-2.5 w-full flex rounded-round10 ${
											activeTab === item
												? "bg-primary text-white"
												: ""
										}`}
									>
										{item}
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="flex-1 p-4">{renderTabContent()}</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default SettingPage;

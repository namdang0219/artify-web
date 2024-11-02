import MainLayout from "layout/MainLayout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { IGlobal, setTheme } from "store/global/globalSlide";

const SettingPage = () => {
	const { theme } = useSelector((state: RootState) => state.global);
	const dispatch = useDispatch();
	const [activeTab, setActiveTab] = useState<"Tab1" | "Tab2" | "Tab3">(
		"Tab1"
	);

	const themes: IGlobal["theme"][] = ["light", "dark", "system"];

	const renderThemeName = (theme: IGlobal["theme"]) => {
		switch (theme) {
			case "light":
				return "ライト";
			case "dark":
				return "ダーク";
			case "system":
				return "システム";
			default:
				break;
		}
	};

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
				<span className="text-xl font-semibold">Theme</span>
				<div className="flex items-center gap-2">
					{themes.map((item: IGlobal["theme"]) => (
						<div
							key={item}
							onClick={() => dispatch(setTheme(item))}
						>
							<div
								className={`w-[110px] h-[65px] border-2 ${
									item === theme
										? "border-blue-500"
										: "border-gray-200"
								} rounded-lg cursor-pointer ${
									item === "light"
										? "bg-white"
										: item === "dark"
										? "bg-gray-800"
										: "bg-gray-400"
								}`}
							/>
							<p className="mt-1 text-sm text-center">
								{renderThemeName(item)}
							</p>
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
												: "hover:bg-gray-100"
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

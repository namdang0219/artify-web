import MainLayout from "layout/MainLayout";

const SettingPage = () => {
	return (
		<MainLayout>
			<div className="flex flex-1 p-5">
				<div className="w-full max-w-[850px] rounded-round15 bg-white flex-1 mx-auto p-5">
					<div className="flex items-center justify-between">
						<span>Theme</span>
						<div></div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default SettingPage;

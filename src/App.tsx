import { Route, Routes } from "react-router-dom";
import DashboardPage from "./page/app/DashboardPage";
import CommunityPage from "./page/app/CommunityPage";
import CalendarPage from "./page/app/CalendarPage";
import HelpPage from "./page/app/HelpPage";
import SettingPage from "./page/app/SettingPage";
import HomePage from "page/app/HomePage";
import CoursePage from "page/app/CoursePage";
import ContestPage from "page/app/ContestPage";
import WorkshopPage from "page/app/WorkshopPage";
import VideoLearningPage from "page/app/(learning)/VideoLearningPage";
import OnlineLearningPage from "page/app/(learning)/OnlineLearningPage";
import ProfilePage from "page/app/ProfilePage";
import { useDarkMode } from "usehooks-ts";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { useEffect } from "react";

const App = () => {
	const { isDarkMode } = useDarkMode();
	const { theme } = useSelector((state: RootState) => state.global);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.className = "dark";
		} else if (theme === "light") {
			document.documentElement.className = "";
		} else if (theme === "system") {
			isDarkMode
				? (document.documentElement.className = "dark")
				: (document.documentElement.className = "");
		}
	}, [isDarkMode, theme]);

	return (
		<Routes>
			<Route path="/dashboard" element={<DashboardPage />}></Route>
			<Route path="/community" element={<CommunityPage />}></Route>
			<Route path="/calendar" element={<CalendarPage />}></Route>
			<Route path="/help" element={<HelpPage />}></Route>
			<Route path="/setting" element={<SettingPage />}></Route>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/course" element={<CoursePage />}></Route>
			<Route path="/contest" element={<ContestPage />}></Route>
			<Route path="/workshop" element={<WorkshopPage />}></Route>
			<Route path="/profile" element={<ProfilePage />}></Route>

			{/* learning  */}
			<Route
				path="/learning/video"
				element={<VideoLearningPage />}
			></Route>
			<Route
				path="/learning/online"
				element={<OnlineLearningPage />}
			></Route>
			<Route
				path="/learning/online/:liveid"
				element={<OnlineLearningPage />}
			></Route>
		</Routes>
	);
};

export default App;

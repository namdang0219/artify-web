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

const App = () => {
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
		</Routes>
	);
};

export default App;

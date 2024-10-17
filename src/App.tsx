import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "./page/app/DashboardScreen";
import CommunityScreen from "./page/app/CommunityScreen";
import CalendarScreen from "./page/app/CalendarScreen";
import HelpScreen from "./page/app/HelpScreen";
import SettingScreen from "./page/app/SettingScreen";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardScreen />}></Route>
			<Route path="/community" element={<CommunityScreen />}></Route>
			<Route path="/calendar" element={<CalendarScreen />}></Route>
			<Route path="/help" element={<HelpScreen />}></Route>
			<Route path="/setting" element={<SettingScreen />}></Route>
		</Routes>
	);
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/app/HomePage";
import SignupPage from "./page/auth/SignupPage";
import LoginPage from "./page/auth/LoginPage";
import ContestPage from "page/app/ContestPage";
import MyCoursePage from "page/app/MyCoursePage";
import SchedulePage from "page/app/SchedulePage";
import WorkshopPage from "page/app/WorkshopPage";

const App = () => {
	return (
		<Routes>
			<>
				<Route path="/" element={<HomePage />} />
				<Route path="/contest" element={<ContestPage />} />
				<Route path="/my-courses" element={<MyCoursePage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/workshop" element={<WorkshopPage />} />
			</>
			<>
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
			</>
		</Routes>
	);
};

export default App;

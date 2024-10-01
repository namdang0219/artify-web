import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/app/HomePage";
import SignupPage from "./page/auth/SignupPage";
import LoginPage from "./page/auth/LoginPage";

const App = () => {
	return (
		<Routes>
			<>
				<Route path="/" element={<HomePage />} />
			</>
			<>
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
			</>
		</Routes>
	);
};

export default App;

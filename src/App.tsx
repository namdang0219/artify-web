import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Routes>
	);
};

export default App;

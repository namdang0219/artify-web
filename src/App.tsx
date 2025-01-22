import { Route, Routes } from "react-router";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import HomePage from "./page/HomePage";
import LivePage from "./page/LivePage";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/live/:liveId" element={<LivePage />} />
		</Routes>
	);
};

export default App;

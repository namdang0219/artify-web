import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducer";

const App = () => {
	const { theme } = useSelector((state: RootState) => state.global);
	console.log("🚀 ~ App ~ theme:", theme)

	return <div className="text-teal-500">App</div>;
};

export default App;

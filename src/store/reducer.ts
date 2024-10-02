import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import globalSlice from "./global/globalSlice";

export const reducer = combineReducers({
	global: globalSlice,
	user: userSlice,
});

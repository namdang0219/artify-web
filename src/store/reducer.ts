import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/UserSlice";

export const reducer = combineReducers({
	user: userSlice,
});

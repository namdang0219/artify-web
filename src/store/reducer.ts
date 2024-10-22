import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlide";
import userSlice from './user/userSlice';

export const reducer = combineReducers({
	global: globalSlice,
	user: userSlice
});

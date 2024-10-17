import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlide";

export const reducer = combineReducers({
	global: globalSlice,
});

export type RootState = ReturnType<typeof reducer>;

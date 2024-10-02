import { createSlice } from "@reduxjs/toolkit";

interface IGlobalState {
	theme: "system" | "light" | "dark";
}

const initialState: IGlobalState = {
	theme: "system",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setTheme: (state, action) => ({
			...state,
			theme: action.payload,
		}),
	},
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;

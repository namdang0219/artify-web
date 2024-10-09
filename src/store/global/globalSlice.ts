import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalState {
	theme: "light" | "dark" | "default";
}

const initialState: IGlobalState = {
	theme: "default",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;

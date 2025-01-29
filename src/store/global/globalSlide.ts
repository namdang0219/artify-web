import { createSlice } from "@reduxjs/toolkit";

export interface IGlobal {
	theme: "light" | "dark" | "system";
	language: "en" | "ja";
}

const initialState: IGlobal = {
	theme: "light",
	language: "ja",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { setTheme, setLanguage } = globalSlice.actions;
export default globalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface IGlobal {
	theme: "light" | "dark" | "system";
	language: "en" | "ja";
}

const initialState: IGlobal = {
	theme: "light",
	language: "en",
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

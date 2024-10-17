import { createSlice } from "@reduxjs/toolkit";

interface IGlobal {
	theme: "light" | "dark" | "system";
}

const initialState: IGlobal = {
	theme: "light",
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

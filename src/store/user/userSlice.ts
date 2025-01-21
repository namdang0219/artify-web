import { createSlice } from "@reduxjs/toolkit";

interface IUser {
	uid: number;
	displayName: string;
	email: string;
	photoURL: string;
	role: "TEACHER" | "STUDENT";
}

const initialState: IUser = {
	uid: 1,
	displayName: "MeowCopter",
	email: "meowcopter@gmail.com",
	photoURL:
		"https://images.unsplash.com/photo-1729260551369-8a0f63a28b4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	role: "TEACHER",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.uid = action.payload.uid;
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

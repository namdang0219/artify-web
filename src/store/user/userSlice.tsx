import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
	displayName: string;
	email: string;
	photoURL: string;
}

const initialState: IUserState = {
	displayName: "MeowCopter",
	email: "admin@example.com",
	photoURL: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;

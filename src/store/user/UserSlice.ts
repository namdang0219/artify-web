import { createSlice } from "@reduxjs/toolkit";

interface IUser {
	displayName: string;
	email: string;
	photoURL: string;
}

const initialState: IUser = {
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

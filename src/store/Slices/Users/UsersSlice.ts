import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../typescript/interfaces/IUser";
import { toast } from "react-toastify";

interface InitialState {
	users: IUser[],
	user: IUser,
	status: "idle" | "registered" | "loggedin" | "loggedout";
}

const initialState: InitialState = {
	users: [],
	user: {},
	status: "idle",
};

export const usersNamespace = "users";

const userSlice = createSlice({
	name: usersNamespace,
	initialState,
	reducers: {
		setAllUsersAC: (state, action: PayloadAction<InitialState["users"]>) => {
			state.users = action.payload;
		},

		setUserAC: (state, action: PayloadAction<InitialState["user"]>) => {
			state.user = action.payload;
		},

		createUserAC: (state, action: PayloadAction<IUser>) => {
			state.users = [...state.users, action.payload];
		},

		createAdminAC: (state, action: PayloadAction<IUser>) => {
			state.users = [...state.users, action.payload];
		},

		editUserAC: (state, action: PayloadAction<IUser>) => {
			const editUserId = action.payload.id;

			state.users.filter((user) => {
				if (user.id === editUserId) {
					user.firstName = action.payload.firstName;
					user.lastName = action.payload.lastName;
					user.email = action.payload.email;
					user.password = action.payload.password;
				};
			});
		},

		deleteUserAC: (state, action: PayloadAction<IUser>) => {
			const deleteUserId = action.payload.id;
			const newUsers = state.users.filter((user) => user.id !== deleteUserId);

			state.users = [...newUsers];
		},

		checkLoginAC: (state, action: PayloadAction<IUser>) => {
			const email = action.payload.email;
			const password = action.payload.password;

			const checkMatching = state.users.filter((user) => {
					if (user.email?.includes(email!) && user.password?.includes(password!)) {
						localStorage.setItem("token", user.auth!);
						localStorage.setItem("user", user.id!.toString());
					};

					return user.email === email && user.password === password
				}
			);

			if (checkMatching.length === 0) {
				toast.error("Invalid email address or password");

				return;
			};

			state.status = "loggedin";
			return;
		},
		
		setStatus: (state, action: PayloadAction<InitialState["status"]>) => {
			state.status = action.payload;
		},

		logout: (state, action: PayloadAction<InitialState["status"]>) => {
			state.status = action.payload;
		},		
	},
});

export const { setAllUsersAC } = userSlice.actions;
export const { setUserAC } = userSlice.actions;
export const { createUserAC } = userSlice.actions;
export const { createAdminAC } = userSlice.actions;
export const { editUserAC } = userSlice.actions;
export const { deleteUserAC } = userSlice.actions;
export const { checkLoginAC } = userSlice.actions;

export const { setStatus } = userSlice.actions;
export const { logout } = userSlice.actions;

export default userSlice;

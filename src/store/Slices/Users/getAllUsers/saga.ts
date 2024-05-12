import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { getAllUsers } from "services/userService";
import { IUser } from "typescript/interfaces/IUser";
import { getAllUsersACS } from "../request";
import { setAllUsersAC } from "../UsersSlice";

export function* getAllUsersSaga(action: ReturnType<typeof getAllUsersACS>) {
	try {
		const response: AxiosResponse<IUser[]> = yield call(getAllUsers);
		yield put(setAllUsersAC(response.data));
	} catch (error) {
		console.error(error, "Unable to get list of all users.");
	}
}

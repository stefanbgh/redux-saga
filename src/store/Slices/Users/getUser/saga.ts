import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { getUser } from "services/userService";
import { IUser } from "typescript/interfaces/IUser";
import { getUserACS } from "../request";
import { setUserAC } from "../UsersSlice";

export function* getUserSaga(action: ReturnType<typeof getUserACS>) {
    try {
        const response: AxiosResponse<IUser> = yield call(getUser, action.payload.id);
        yield put(setUserAC(response.data))
    } catch (error) {
        console.log(error);
    }
};
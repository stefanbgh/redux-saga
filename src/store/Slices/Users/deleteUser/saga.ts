import { AxiosResponse } from "axios";
import { deleteUserACS } from "../request";
import { call, put } from "redux-saga/effects";
import { deleteUser } from "services/userService";
import { IUser } from "typescript/interfaces/IUser";
import { deleteUserAC } from "../UsersSlice";
import { toast } from "react-toastify";

export function* deleteUserSaga(action: ReturnType<typeof deleteUserACS>) {
    try {
        const response: AxiosResponse<IUser> = yield call(deleteUser, action.payload.id);
        yield put(deleteUserAC(response.data));

        toast.success("You have successfully deleted account");
        
    } catch (error) {
        console.log(error);
    }
};
import { toast } from 'react-toastify';
import { AxiosResponse } from "axios";
import { editUserACS } from "../request";
import { IUser } from "typescript/interfaces/IUser";
import { editUser } from "services/userService";
import { call, put } from "redux-saga/effects";
import { editUserAC } from "../UsersSlice";

export function* editUserSaga(action: ReturnType<typeof editUserACS>) {
    try {
        const response: AxiosResponse<IUser> = yield call(editUser, action.payload.dto);  
        yield put(editUserAC(response.data));
        toast.success("You successfully changed information");
        
    } catch (error) {
        console.log(error);
        
    }
};  
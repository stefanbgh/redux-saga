import { put } from "redux-saga/effects";
import { checkLoginACS } from "../request";
import { checkLoginAC } from "../UsersSlice";

export function* checkLoginSaga(action: ReturnType<typeof checkLoginACS>) {
    const dto = action.payload.dto;
    yield put(checkLoginAC(dto));
};
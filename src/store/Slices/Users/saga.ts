import { takeLatest } from "redux-saga/effects";
import { getAllUsersSaga } from "./getAllUsers/saga";
import { createUserACS, deleteUserACS, editUserACS, getAllUsersACS, getUserACS, checkLoginACS, createAdminACS, changeAuthACS } from "./request";
import { getUserSaga } from "./getUser/saga";
import { createUserSaga } from "./createUser/saga";
import { editUserSaga } from "./editUser/saga";
import { deleteUserSaga } from "./deleteUser/saga";
import { checkLoginSaga } from "./checkLogin/saga";
import { createAdminSaga } from "./createAdmin/saga";
import { changeAuthSaga } from "./changeAuth/saga";

export function* UsersSaga() {
	yield takeLatest(getAllUsersACS.type, getAllUsersSaga);
	yield takeLatest(getUserACS.type, getUserSaga);
	yield takeLatest(createUserACS.type, createUserSaga);
	yield takeLatest(createAdminACS.type, createAdminSaga);
	yield takeLatest(editUserACS.type, editUserSaga);
	yield takeLatest(deleteUserACS.type, deleteUserSaga);
	yield takeLatest(checkLoginACS.type, checkLoginSaga);
	yield takeLatest(changeAuthACS.type, changeAuthSaga);
}

import { all } from "redux-saga/effects";
import { UsersSaga } from "./Slices/Users/saga";

function* rootSaga() {
	yield all([UsersSaga()]);
}

export default rootSaga;

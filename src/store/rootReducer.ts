import { combineReducers } from "redux";
import userSlice from "./Slices/Users/UsersSlice";

const rootReducer = () => {
	return combineReducers({
		usersSlice: userSlice.reducer,
	});
};

export default rootReducer;

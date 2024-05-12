import { toast } from 'react-toastify';
import { changeAuthACS } from "../request";
import { call } from "redux-saga/effects";
import { changeAuth } from 'services/userService';

export function* changeAuthSaga(action: ReturnType<typeof changeAuthACS>) {
    try {
        yield call(changeAuth, action.payload.dto);  
        toast.success("You successfully changed authorization");
        
    } catch (error) {
        console.log(error);
        
    }
};  
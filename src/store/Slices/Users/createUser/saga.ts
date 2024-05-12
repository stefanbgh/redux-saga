import { IUser } from 'typescript/interfaces/IUser';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { createUser } from 'services/userService';
import { createUserACS } from '../request';
import { createUserAC, setStatus } from '../UsersSlice';

export function* createUserSaga(action: ReturnType<typeof createUserACS>) {
    try {
        const response: AxiosResponse<IUser> = yield call(createUser, action.payload.dto);  
        yield put(createUserAC(response.data));
        yield put(setStatus("registered"));
        
    } catch (error) {
        console.log(error);
    }
};
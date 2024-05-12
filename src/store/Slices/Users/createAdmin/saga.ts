import { IUser } from 'typescript/interfaces/IUser';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { createAdmin } from 'services/userService';
import { createAdminACS } from '../request';
import { createAdminAC } from '../UsersSlice';
import { toast } from 'react-toastify';

export function* createAdminSaga(action: ReturnType<typeof createAdminACS>) {
    try {
        const response: AxiosResponse<IUser> = yield call(createAdmin, action.payload.dto);  
        yield put(createAdminAC(response.data));
        toast.success("You have successfully created a new administrator");
        
    } catch (error) {
        console.log(error);
    }
};
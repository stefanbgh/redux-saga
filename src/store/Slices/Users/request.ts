import { createAction } from "@reduxjs/toolkit";
import { usersNamespace } from "./UsersSlice";
import { IUser } from "typescript/interfaces/IUser";

// Users
//////////
const getAllUsersACS = createAction(`${usersNamespace}/getAllUsersACS`);

const getUserACS = createAction(`${usersNamespace}/getUserACS`, (id: number) => {
    return { payload: { id } };
});

const createUserACS = createAction(`${usersNamespace}/createUserACS`, (dto: IUser) => {
    return { payload: { dto } };
});

const createAdminACS = createAction(`${usersNamespace}/createAdminACS`, (dto: IUser) => {
    return { payload: { dto } };
});

const editUserACS = createAction(`${usersNamespace}/editUserACS`, (dto: IUser) => {
    return { payload: { dto } };
});

const changeAuthACS = createAction(`${usersNamespace}/changeAuthACS`, (dto: IUser) => {
    return { payload: { dto } };
});

const deleteUserACS = createAction(`${usersNamespace}/deleteUserACS`, (id: number) => {
    return { payload: { id } };
});

const checkLoginACS = createAction(`${usersNamespace}/checkLoginACS`, (dto: { email?: string, password?: string }) => {
    return { payload: { dto } };
});

export { getAllUsersACS, getUserACS, createUserACS, createAdminACS, editUserACS, deleteUserACS, checkLoginACS, changeAuthACS };


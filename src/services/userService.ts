import { AxiosResponse } from "axios";
import { IUser } from "typescript/interfaces/IUser";
import { jwtAdmin, jwtUser } from "utils/helpers/jwt";
import httpClient from "utils/httpClient/httpClient";

export const getAllUsers = (): Promise<AxiosResponse<IUser[]>> => {
	return httpClient.get("/users");
};

export const getUser = (id: number): Promise<AxiosResponse<IUser>> => {
	return httpClient.get(`/users/${id}`);
};

export const createUser = (dto: IUser): Promise<AxiosResponse<IUser>> => {
	return httpClient.post("/users", {
		...dto,
		auth: jwtUser
	});
};

export const createAdmin = (dto: IUser): Promise<AxiosResponse<IUser>> => {
	return httpClient.post("/users", {
		...dto,
		auth: jwtAdmin
	});
};

export const editUser = (dto: IUser): Promise<AxiosResponse<IUser>> => {
	return httpClient.patch(`/users/${dto.id}`, dto);
};	

export const changeAuth = (dto: IUser): Promise<AxiosResponse<IUser>> => {
	return httpClient.patch(`/users/${dto.id}`, dto);
};	

export const deleteUser = (id: number): Promise<AxiosResponse<IUser>> => {
	return httpClient.delete(`/users/${id}`);
};


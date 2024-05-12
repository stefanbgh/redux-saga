import axios, { isAxiosError } from "axios";
import { Routes } from "../../Routes/Routes";

const httpClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
	// Logic when you have RL BE Server
	// const token = JSON.parse(localStorage.getItem("token")!);
	// if (token) config.headers.Authorization = token;
	config.headers["X-RapidAPI-Key"] = process.env.REACT_APP_KEY;

	return config;
});

httpClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (isAxiosError(error) && error?.response?.status === 401) {
			localStorage.clear();
			window.location.replace(`${process.env.REACT_APP_BASE_URL}${Routes.LOGIN}`);
		} else throw error;
	}
);

export default httpClient;

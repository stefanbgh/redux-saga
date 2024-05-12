import {
	BrowserRouter,
	Routes as BrowserRoutes,
	Route,
} from "react-router-dom";

import PrivateLayout from "../layout/PrivateLayout";

import { Routes } from "./Routes";
import { Login, Register, Home, NotFound, Dashboard, Customers, Auth, Charts, Faq, Support, Calendar } from "pages";
import Layout from "layout/Layout";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Router = (): JSX.Element => {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<BrowserRoutes>
					{/* Private Routes */}
					<Route
						path={Routes.HOME}
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						path={Routes.AUTH}
						element={
							<PrivateRoute>
								<Auth/>
							</PrivateRoute>
						}
					/>
					<Route
						path={Routes.DASHBOARD}
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CUSTOMERS}`}
						element={
							<PrivateRoute>
								<Dashboard>
									<Customers/>
								</Dashboard>
							</PrivateRoute>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CALENDAR}`}
						element={
							<PrivateRoute>
								<Dashboard> 
									<Calendar/>
								</Dashboard>
							</PrivateRoute>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CHARTS}`}
						element={
							<PrivateRoute>
								<Dashboard> 
									<Charts/>
								</Dashboard>
							</PrivateRoute>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.FAQ}`}
						element={
							<PrivateRoute>
								<Dashboard> 
									<Faq/>
								</Dashboard>
							</PrivateRoute>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.SUPPORT}`}
						element={
							<PrivateRoute>
								<Dashboard> 
									<Support/>
								</Dashboard>
							</PrivateRoute>
						}
					/>

					{/* Public Routes */}
					<Route 
						path={Routes.LOGIN} 
						element={
							<Layout>
								<Login/>
							</Layout>
						} 
					/>
					<Route 
						path={Routes.REGISTER} 
						element={
							<Layout>
								<Register/>
							</Layout>
						} 
					/>
					<Route 
						path={Routes.NOTFOUND} 
						element={
							<Layout>
								<NotFound/>
							</Layout>
						} 
					/>
				</BrowserRoutes>
			</BrowserRouter>
		</>
	);
};

export default Router;

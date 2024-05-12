import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes } from "./Routes";
import { useGetGlobalState } from "hooks/useGetGlobalState";
import PrivateLayout from "layout/PrivateLayout";
import { RootState } from "typescript/types/RootState";

interface IProps {
    children: ReactNode
};

const PrivateRoute = ({ children }: IProps): JSX.Element | null => {
    const token = localStorage.getItem("token");

    const { status } = useGetGlobalState((state: RootState) => state.usersSlice);
	const navigate = useNavigate();

    useEffect(() => {
		if (!token) {
            navigate(Routes.LOGIN);

            return;
        }
		// eslint-disable-next-line
	}, [token, status]);

    if (token) {
        return <PrivateLayout>{children}</PrivateLayout>
    }

    return null;
}

export default PrivateRoute
import { Routes } from 'Routes/Routes';
import { useGetGlobalState } from 'hooks/useGetGlobalState';
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { useEffect } from 'react';
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router';
import { logout } from 'store/Slices/Users/UsersSlice';
import { RootState } from 'typescript/types/RootState';
import { toast } from 'react-toastify';

import "./LogoutButton.scss";

interface IProps {
    sidebar: boolean;
};

const LogoutButton = ({ sidebar }: IProps): JSX.Element => {
    const { status } = useGetGlobalState((state: RootState) => state.usersSlice);
    const dispatch = useSetGlobalState();

    const navigate = useNavigate();

    useEffect(() => {
        if (status === "loggedout") {
            navigate(Routes.LOGIN);

            return;
        }
    }, [status]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch(logout("loggedout"));
        toast.success("You have successfully logged out");
    };

    return (
        <button 
            className={sidebar ? "logout__btn-sidebar" : "logout__btn-pill"}
            onClick={handleLogout}
        >
            { sidebar ? <div><BiLogOut/></div> : "" }
            <p className={sidebar ? "pl-2" : ""}>Logout</p>
        </button>
  )
}

export default LogoutButton
import { Routes } from 'Routes/Routes';
import { Analytics, Sidebar } from 'components';
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { jwtAdmin } from 'utils/helpers/jwt';

interface IProps {
    children?: ReactNode;
};

const Dashboard = ({ children }: IProps): JSX.Element => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (token !== jwtAdmin) {
            navigate(Routes.HOME);

            return;
        }
    }, [token]);

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/6 border border-red-300 h-full">
                <Sidebar/>
            </div>
            <div className="w-5/6 border border-red-300 h-full">
                {
                    children
                    ? children
                    : <Analytics/>
                }
            </div>
        </div>
    )
}

export default Dashboard
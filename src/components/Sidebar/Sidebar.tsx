import { useEffect } from 'react'
import { sidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import { Routes } from 'Routes/Routes';
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { useGetGlobalState } from 'hooks/useGetGlobalState';
import { RootState } from 'typescript/types/RootState';
import { getUserACS } from 'store/Slices/Users/request';
import { LogoutButton } from "components";

import "./Sidebar.scss"

const Sidebar = (): JSX.Element => {
    const userId = localStorage.getItem("user");

	const dispatch = useSetGlobalState();
	const { user, users } = useGetGlobalState((state: RootState) => state.usersSlice);

	useEffect(() => {
        if (userId) {
            dispatch(getUserACS(parseInt(userId)));

            return;
        }
	}, [userId, users]);

    return (
        <div className="sidebar">
            <div className="sidebar__position">
			{sidebarData.map((data) => {
				const { id, icon, title, path, logout, profile } = data;

				if (profile) {
					return (
						<p className="sidebar__profile" key={id}>
							Admin: { 
								user.firstName === undefined 
									? "..." 
									: user.firstName.length > 7 
										? user.firstName.slice(0, 7) + "..."
										: user.firstName
									
							}
						</p>
					)
				}

				if (!logout) {
					return (
						<Link 
							key={id}
							to={path ? path : Routes.NOTFOUND}
							className="sidebar__element"
						>
                            <div>{icon}</div>
						    <p className="sidebar__element-title">{title}</p>
						</Link>
					)
				}

				return <LogoutButton key={id} sidebar={true}/>;
			})}
            </div>
		</div>
  )
}

export default Sidebar
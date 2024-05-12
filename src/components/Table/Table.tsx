import { useEffect, useState } from "react";

import { tableData } from "./tableData";
import { useSetGlobalState } from "hooks/useSetGlobalState";
import { RootState } from "typescript/types/RootState";

import { EditModal, DeleteModal, LoadingSkeleton } from "components";
import { getAllUsersACS } from "store/Slices/Users/request";
import { jwtAdmin, jwtUser } from "utils/helpers/jwt";

import { TableHead, TableBody } from "../Table/index";
import { IUser } from "typescript/interfaces/IUser";

import "./Table.scss"
import { useGetGlobalState } from "hooks/useGetGlobalState";

interface IProps {
	displayUsers: IUser[];
}

const Table = ({ displayUsers }: IProps): JSX.Element => {
	const { users } = useGetGlobalState((state: RootState) => state.usersSlice);
	const dispatch = useSetGlobalState();

	useEffect(() => {
		dispatch(getAllUsersACS());

	}, []);

	return (
	<>
		<div className="table-shadow">
			{
				users.length !== 0 ? (
					<table className="table">
						<thead className="table__head">
							<tr>	
                		    {
								tableData.map((data) => <TableHead key={data.id} head={data.head}/>)
                		    }
							</tr>
						</thead>
						<tbody>
							{
								displayUsers.map((user) => {
									const { id, firstName, lastName, email, auth } = user;
								
									return (
										<TableBody
											key={id}
											id={id}
											firstName={firstName}
											lastName={lastName}
											email={email}
											auth={auth}	
										/>
									)
								})
							}
						</tbody>
					</table>
				) : <LoadingSkeleton height={50} count={5}/>
			}
		</div>
		
	</>
	);
};

export default Table;
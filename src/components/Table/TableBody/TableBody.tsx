import { IUser } from "typescript/interfaces/IUser";
import { EditModal, DeleteModal, AuthSelect } from "../../../components";
import { jwtAdmin, jwtUser } from "utils/helpers/jwt";
import { useSetGlobalState } from "hooks/useSetGlobalState";
import { ChangeEvent } from "react";
import { changeAuthACS } from "store/Slices/Users/request";

const TableBody = ({ id, firstName, lastName, email, auth }: IUser): JSX.Element => {
	const userId = localStorage.getItem("user");
    const dispatch = useSetGlobalState();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

		if (value === "admin") {
			dispatch(changeAuthACS({
				id,
				auth: jwtAdmin
			}));

			return;
		}

        dispatch(changeAuthACS({
            id,
			auth: jwtUser
        }));
    };

	return (
		<tr className="table__body-tr">
			<th scope="row" className="table__body-th">
				{id}
			</th>
			<td className="table__body-td">{firstName}</td>
			<td className="table__body-td">{lastName}</td>
			<td className="table__body-td">{email}</td>
			<td className="table__body-td">
				<AuthSelect
                    auth={auth!}
                    handleChange={handleChange}
					id={id!}
                />
			</td>
			<td className="table__body-td flex space-x-4">
				<EditModal userId={id!} />
				{
					userId! !== id?.toString() ? (
						<DeleteModal userId={id!} />
					) : null
				}
				
			</td>
		</tr>
	);
};

export default TableBody;

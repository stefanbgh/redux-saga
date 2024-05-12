import { Link } from "react-router-dom";
import { Routes } from "Routes/Routes"; 
import { TfiFaceSad } from "react-icons/tfi";
import { Title } from "components";

const NotFound = (): JSX.Element => {
	return (
		<>
            <TfiFaceSad size={150}/>
			<Title title="Sorry, page not found!"/>
			<Link className="mt-2 text-blue-400" to={Routes.HOME}>Go back</Link>
		</>
	);
};

export default NotFound;
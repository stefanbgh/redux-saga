import { ReactNode } from "react";

import "./PrivateLayout.scss";

interface IProps {
	children: ReactNode;
}

const PrivateLayout = ({ children }: IProps): JSX.Element => {
	return (
		<div className="private-layout">
			{children}
		</div>
	)
		
};

export default PrivateLayout;

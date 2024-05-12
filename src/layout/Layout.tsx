import "./Layout.scss"

interface IProps {
    children: JSX.Element
};

const Layout = ({ children }: IProps): JSX.Element => {
	return (
        <div className="layout">
            {children}
        </div>
    )
};

export default Layout
import { Routes } from 'Routes/Routes';
import { Title } from 'components';
import React from 'react'
import { Link } from 'react-router-dom';
import { jwtAdmin } from 'utils/helpers/jwt';

const Auth = (): JSX.Element => {
    const token = localStorage.getItem("token");

    if (token === jwtAdmin) {
        return (
            <>
                <Title
                    title="Hello Admin"
                />
                <Link 
				    className="text-blue-400 hover:text-blue-600"
				    to={Routes.DASHBOARD}
			    >
                    Open Dashboard
			    </Link>
            </>
        )
    };

    return (
        <>
            <Title
                title="Sorry, but you are not authorized."
            />
            <Link 
                className="text-blue-400 hover:text-blue-600"
                to={Routes.HOME}
			    >
                Go back
			</Link>
        </>
    )
}

export default Auth
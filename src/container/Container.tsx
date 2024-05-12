import { ReactNode } from "react";
import { Box } from '@mui/material';

import "./Container.scss"

interface IProps {
    children: ReactNode;
};

const Container = ({ children }: IProps): JSX.Element => {
    return (
        <Box className="container">
            {children}
        </Box>
    )
}

export default Container
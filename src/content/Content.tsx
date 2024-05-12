import { Box } from '@mui/material'
import { ReactNode } from "react";

import "./Content.scss"

interface IProps {
    children: ReactNode;
    addClassName?: string;
}

const Content = ({ children, addClassName }: IProps): JSX.Element => {
    return (
        <Box className={`content ${addClassName}`}>
            {children}
        </Box>
    )
}

export default Content
import { MouseEventHandler } from "react";
import { Box } from '@mui/material'

interface IProps {
    leftBtnHandleEvent: MouseEventHandler<HTMLButtonElement>;
    rightBtnHandleEvent: MouseEventHandler<HTMLButtonElement>;
};  

const DeleteModalButtons = ({ leftBtnHandleEvent, rightBtnHandleEvent }: IProps): JSX.Element => {
    return (
        <Box id="modal__box-content__button">
            <button 
                id="modal__box-content__button-no"
                onClick={leftBtnHandleEvent}
            >
                    No
            </button>
            <button 
                id="modal__box-content__button-yes"
                onClick={rightBtnHandleEvent}
            >
                    Yes
            </button>
        </Box>
    )
}

export default DeleteModalButtons
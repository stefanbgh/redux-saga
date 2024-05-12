import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react'
import { DeleteModalButtons } from "../../../components";
import { BsExclamationCircle } from "react-icons/bs";
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { deleteUserACS } from 'store/Slices/Users/request';

import "./DeleteModal.scss"

interface IProps {
    userId: number;
}

const DeleteModal = ({ userId }: IProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useSetGlobalState();

    const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
    
    const handleDelete = (userId: number) => {
        dispatch(deleteUserACS(userId));

        setOpen(false);
    };

    return (
        <>
			<Typography 
                fontSize={14} 
                id="modal__typography-delete" 
                onClick={handleOpen}
            >
				delete
			</Typography>
			<Modal open={open} onClose={handleClose}>
				<Box id="modal__box">
                    <Box id="modal__box-content">
                        <BsExclamationCircle
                            size={40}
                        />
                        <Typography fontSize={18}>Are you sure you want to delete this account?</Typography>
                        <DeleteModalButtons
                            leftBtnHandleEvent={handleClose}
                            rightBtnHandleEvent={() => handleDelete(userId)}
                        />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default DeleteModal
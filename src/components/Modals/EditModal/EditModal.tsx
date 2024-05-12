import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../../components/Formik/schemes/validationSchema";
import { FormikForm, FormikField, FormikPassword, FormikError } from "../../../components/Formik/index";
import { IFormikInitialValues } from "typescript/interfaces/IFormikInitialValues";
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { editUserACS } from "store/Slices/Users/request";
import { Box, Modal, Typography } from '@mui/material';
import { BasicModalButtons } from "../../../components";

import { toast } from "react-toastify";

import "./EditModal.scss";

interface IProps {
	userId: number;
}

const EditModal = ({ userId }: IProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useSetGlobalState();

    const initialValues: IFormikInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const { handleSubmit, values, handleChange, handleBlur, handleReset, touched, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { firstName, lastName, email, password } = values;

            dispatch(editUserACS({
				id: userId,
				firstName,
				lastName,
				email,
				password
			}));
            
            setOpen(false);
            resetForm();
        }
    });

    const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

    return (
        <>
            <Typography 
				fontSize={14} 
				id="modal__typography" 
				onClick={handleOpen}
			>
				edit
			</Typography>
            <Modal open={open} onClose={handleClose}>
                <Box id="modal__box">
                    <FormikForm
                        handleSubmit={handleSubmit}
                    >
                        <FormikField
                            id="editFirstName"
                            text="First Name"
                            name="firstName"
                            placeholder="First Name"
                            value={values.firstName!}
                            error={errors.firstName}
                            touched={touched.firstName}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <FormikField
                            id="editLastName"
                            text="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                            value={values.lastName!}
                            error={errors.lastName}
                            touched={touched.lastName}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <FormikField
                            id="editEmail"
                            text="Email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={values.email!}
                            error={errors.email}
                            touched={touched.email}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <FormikPassword
                            id="editPassword"
                            name="password"
                            value={values.password!}
                            error={errors.password}
                            touched={touched.password}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <BasicModalButtons
                            leftBtn="Close"
                            leftBtnHandleEvent={handleClose}
                            rightBtn="Edit"
                            rightBtnType="edit"
                        />
                    </FormikForm>
                </Box>
            </Modal>
        </>
    );
}

export default EditModal;
import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../../components/Formik/schemes/validationSchema";
import { FormikForm, FormikField, FormikPassword, FormikError } from "../../../components/Formik/index";
import { IFormikInitialValues } from "typescript/interfaces/IFormikInitialValues";
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { createAdminACS } from "store/Slices/Users/request";
import AddQuestion from './AddQuestion';
import { Box, Modal } from '@mui/material';
import { BasicModalButtons } from "../../../components";

import { toast } from "react-toastify";

import "./AddModal.scss";

const AddModal = (): JSX.Element => {
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

            dispatch(createAdminACS({
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
            <AddQuestion
                handleEvent={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
                <Box id="modal__box">
                    <FormikForm
                        handleSubmit={handleSubmit}
                    >
                        <FormikField
                            id="addFirstName"
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
                            id="addLastName"
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
                            id="addEmail"
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
                            id="addPassword"
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
                            rightBtn="Add"
                            rightBtnType="add"
                        />
                    </FormikForm>
                </Box>
            </Modal>
        </>
    );
}

export default AddModal;
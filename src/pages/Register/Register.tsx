import { useEffect } from "react"
import { useFormik } from "formik";
import { validationSchema } from "../../components/Formik/schemes/validationSchema";

import { FormikForm, FormikField, FormikPassword, FormikButton } from "../../components/Formik/index";
import { IFormikInitialValues } from "typescript/interfaces/IFormikInitialValues";

import { useGetGlobalState } from 'hooks/useGetGlobalState';
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { useNavigate } from 'react-router';

import { setStatus } from 'store/Slices/Users/UsersSlice';
import { RootState } from 'typescript/types/RootState';
import { Routes } from "Routes/Routes";
import { createUserACS } from "store/Slices/Users/request";

import { toast } from "react-toastify";

import "../../components/Formik/Formik.scss";

const Register = (): JSX.Element => {
    const token = localStorage.getItem("token");
    const { status } = useGetGlobalState((state: RootState) => state.usersSlice);
    const dispatch = useSetGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "registered") {
            toast.success("You have successfully created an account");
            navigate(Routes.LOGIN);

            return;
        }

        if (token) {
            navigate(Routes.HOME);

            return;
        }
    }, [status, token]);

    const initialValues: IFormikInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { firstName, lastName, email, password } = values;

            dispatch(createUserACS({
                firstName,
                lastName,
                email,
                password
            }));    
        }
    });

    return (
        <FormikForm
            handleSubmit={handleSubmit}
        >
            <FormikField
                id="registerFirstName"
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
                id="registerLastName"
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
                id="registerEmail"
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
                id="registerPassword"
                name="password"
                value={values.password!}
                error={errors.password}
                touched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <FormikButton
                type="register"
            />
        </FormikForm>
    );
}

export default Register;
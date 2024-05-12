import { useEffect } from "react"
import { useFormik } from "formik";
import { loginSchema } from "../../components/Formik/schemes/loginSchema";

import { FormikForm, FormikField, FormikPassword, FormikButton, FormikError } from "../../components/Formik/index";
import { IFormikInitialValues } from "typescript/interfaces/IFormikInitialValues";

import { useGetGlobalState } from 'hooks/useGetGlobalState';
import { useSetGlobalState } from 'hooks/useSetGlobalState';
import { useNavigate } from 'react-router';

import { setStatus } from 'store/Slices/Users/UsersSlice';
import { RootState } from 'typescript/types/RootState';
import { Routes } from "Routes/Routes";
import { checkLoginACS, getAllUsersACS } from "store/Slices/Users/request";

import { toast } from "react-toastify";

import "../../components/Formik/Formik.scss";

const Login = (): JSX.Element => {
    const token = localStorage.getItem("token");
    const { status } = useGetGlobalState((state: RootState) => state.usersSlice);
    const dispatch = useSetGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllUsersACS());

        if (status === "loggedin") {
            navigate(Routes.HOME);
            toast.success("You have successfully logged in");

            return;
        }

        if (token) {
            navigate(Routes.HOME);

            return;
        }
    }, [token, status]);

    const initialValues: IFormikInitialValues = {
        email: "",
        password: ""
    };

    const { handleSubmit, values, handleChange, handleBlur, handleReset, touched, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            const { email, password } = values;

            dispatch(checkLoginACS({
                email,
                password
            }));

            resetForm();
        }
    });

    const handleToRegister = () => {
		dispatch(setStatus("idle"));
        navigate(Routes.LOGIN);
	};

    return (
        <FormikForm
            handleSubmit={handleSubmit}
        >
            <FormikField
                id="loginEmail"
                name="email"
                text="Email"
                placeholder="example@gmail.com"
                value={values.email!}
                error={errors.email}
                touched={touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <FormikPassword
                id="loginPassword"
                name="password"
                value={values.password!}
                error={errors.password}
                touched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <FormikButton
                type="login"
                handleEvent={handleToRegister}
            />
        </FormikForm>
    );
}

export default Login;
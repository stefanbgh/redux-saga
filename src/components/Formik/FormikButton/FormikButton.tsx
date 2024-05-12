import { Routes } from "Routes/Routes";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom"

interface IProps {
    type: string;
    handleEvent?: MouseEventHandler<HTMLAnchorElement>;
};

const FormikButton = ({ type, handleEvent }: IProps): JSX.Element => {
    return (
        <div className="form__div-button">
            <button className="form__button">
                {
                    type === "login"
                    ? "Sign In"
                    : "Sign Up"
                }
            </button>
            <p className="form__p">
                {
                    type === "login"
                    ? "Don't have an account?"
                    : "Have an account?"
                }
                <Link
                    className="form__link"
                    onClick={handleEvent}
                    to={type === "login" ? Routes.REGISTER : Routes.LOGIN}
                >
                    {
                        type === "login" 
                        ? "Register"
                        : "Login"
                    }
                </Link>
            </p>
        </div>
    )
}

export default FormikButton
import { FormEventHandler, ReactNode } from "react"

interface IProps {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    children: ReactNode;
};

const FormikForm = ({ handleSubmit, children }: IProps): JSX.Element => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormikForm
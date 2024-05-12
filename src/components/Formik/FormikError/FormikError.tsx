import { BsExclamationCircle } from "react-icons/bs";

interface IProps {
  error: string | undefined;
  touched: boolean | undefined;
};

const FormikError = ({ error, touched }: IProps): JSX.Element | null => {
    if (error && touched) {
        return (
            <div className="flex items-center mt-1">
                <BsExclamationCircle color="red" size={16}/>
                <p className="ml-1 text-red-500 text-sm">{error}</p>
            </div>
        )
    }

    return null;
}

export default FormikError
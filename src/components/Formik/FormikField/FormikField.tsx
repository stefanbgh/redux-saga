import { IFormikField } from "typescript/interfaces/IFormikField";
import FormikError from "../FormikError/FormikError";

const FormikField = ({ id, text, name, placeholder, value, error, touched, handleChange, handleBlur }: IFormikField): JSX.Element => {
	return (
		<div className="form__div">
			<label className="form__label" htmlFor={id}>
				{ text }
			</label>
			<input
				className={
					touched && error
						? "form__input border-red-400"
						: "form__input"
				}
				id={id}
				type="text"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<FormikError touched={touched} error={error} />
		</div>
	);
};

export default FormikField;
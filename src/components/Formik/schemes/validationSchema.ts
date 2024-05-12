import { validateEmail, withoutNumber, withoutSpaceBetweenLetter, withoutWhiteSpace } from "utils/helpers/regex";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(withoutNumber, { message: "First name must have letters" })
		.matches(withoutSpaceBetweenLetter, { message: "There must be no space between letters" })
		.min(3, "First name must be at least 3 characters")
		.max(30, "First name must be less than 30 characters")
		.required("Required"),

	lastName: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(withoutNumber, { message: "Last name must have letters" })
		.matches(withoutSpaceBetweenLetter, { message: "There must be no space between letters" })
		.min(3, "Last name must be at least 3 characters")
		.max(30, "Last name must be less than 30 characters")
		.required("Required"),

	email: Yup.string()
		.matches(validateEmail, { message: "Invalid email address" } )
		.required("Required"),

	password: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(withoutSpaceBetweenLetter, { message: "There must be no space between letters" })
		.min(3, "Password must be at least 3 characters")
		.max(30, "Password must be less than 30 characters")
		.required("Required")
});
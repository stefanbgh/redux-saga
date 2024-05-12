import { withoutWhiteSpace } from "utils/helpers/regex";
import * as Yup from "yup";

export const calendarEventSchema = Yup.object().shape({
    setEvent: Yup.string()
        .matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
        .min(3, "Event must be at least 3 characters")
        .max(30, "Event must be less than 30 characters")
});
import * as Yup from "yup";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export const ValidationSchema = Yup.object().shape({

  Name: Yup.string().required("Name is required").nullable(true),

  Email: Yup.string().required("Email is required")
    .matches(EMAIL_REGEX, "Email is Invalid")
    .nullable(true),

  Password: Yup.string().max(4, "Can't be more than 4").min(4, "Can't be less than 4").required("Password is required").nullable(true)

})  
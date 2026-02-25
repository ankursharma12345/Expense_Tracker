import { useFormik } from "formik";
import SignUp_Page from "./SignUp_Page";
import { ValidationSchema } from "./ValidationSchema";

const ValidationLayer = (props) => {
  const handleParameter = () => {
    return {
      initialValues: props.formData,
      validationSchema: ValidationSchema,
      enableReinitialize: true,
      onSubmit:
        props?.handleSave
    }
  }
  const { handleSubmit, errors } = useFormik(handleParameter());

  const handlePreSubmit = async () => {
    handleSubmit();
  }

  const propsForForm = {
    ...props,
    errors,
    handleSubmit: handlePreSubmit
  }

  return (
    <SignUp_Page {...propsForForm} />
  )

}
export default ValidationLayer;

import { useFormik } from "formik";
import Login from "./Login";
import { ValidationSchema } from "./ValidationSchema";

const ValidationLayer = (props) => {
  const handleParameter = () => {
    return {
      initialValues: props.formData,
      validationSchema: ValidationSchema,
      // enableReinitialize: true,
      enableReinitialize: true,
      onSubmit:
        props?.handleSave()
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
    <Login {...propsForForm} />
  )

}
export default ValidationLayer;

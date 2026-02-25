import { useState } from "react";
import Validationlayer from "./ValidationLayer";

const SignupFormHandler = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => { }

  const propsForMainPage = {
    formData,
    handleChange,
    handleSave
  }

  return (
    <Validationlayer {...propsForMainPage} />
  )
}
export default SignupFormHandler;

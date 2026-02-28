import { startTransition, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidationLayer from "./ValidationLayer";

const LoginFormHandler = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    debugger;
  }

  const navigate = useNavigate();

  const openSignupPage = () => {
    startTransition(() => {
      navigate(`/signup`, { replace: true });
    });
  }

  const propsForMainPage = {
    formData,
    handleChange,
    openSignupPage,
    handleSave
  }

  return (
    <>
      <ValidationLayer {...propsForMainPage} />
    </>
  )
}
export default LoginFormHandler;
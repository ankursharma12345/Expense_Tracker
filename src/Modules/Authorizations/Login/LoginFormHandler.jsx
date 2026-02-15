import { useState } from "react";
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
  }

  const navigate = useNavigate();

  const openLoginPage = () => navigate(`/signup`, { replace: true });

  const propsForMainPage = {
    formData,
    handleChange,
    openLoginPage,
    handleSave
  }

  return (
    <>
      <ValidationLayer {...propsForMainPage} />
    </>
  )
}
export default LoginFormHandler;
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import "../../../assets/Styles/SignUp_Page.css";
import SubmitButton from "../../../Components/Core/Buttons/SubmitButton";
import PasswordWoState from "../../../Components/Core/InputFields/PasswordField";
import TextFieldForForm from "../../../Components/Core/InputFields/TextFieldForForm";
import { FormShortcutField } from "../../../Utils";

const Login = (props) => {

  const handleSave = () => props?.handleSubmit();

  useEffect(() => {
    if (!props?.errors) return;

    const errorFields = Object.keys(props.errors);

    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const element = document.getElementById(firstErrorField);

      if (element)
        element.focus();
    }
  }, [props?.errors]);

  const handleKeyDown = (e) => {
    if (e?.altKey) {
      if (e?.key === "s") {
        FormShortcutField(e);
      }
    }
  }


  return (
    <Grid container className="mainContainer">
      {/* Form Section - Fixed Width */}
      <Grid size={{ xs: 12, md: 12 }} className="formSection">
        <Box className="formContainer">
          <Typography variant="h4" align="center" fontWeight="bold" className="formTitle">
            Log In
          </Typography>
          <div align="center" className="login-formSubtitle">
            Please Enter Your Details Below
          </div>

          <Grid container spacing={5} className="grid-form" component="form">
            <Grid size={{ xs: 12 }}>
              <TextFieldForForm
                id="Name"
                label="Name"
                autoFocus
                onKeyDown={handleKeyDown}
                onChange={props?.handleChange}
                value={props?.formData?.["Name"] || ""}
                placeholder="Enter your name"
                helperText={props?.errors?.["Name"]}
                error={props?.errors?.["Name"] ? true : false}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextFieldForForm
                id="Email"
                label="Email"
                onChange={props?.handleChange}
                onKeyDown={handleKeyDown}
                value={props?.formData?.["Email"] || ""}
                placeholder="Enter your email"
                helperText={props?.errors?.["Email"]}
                error={props?.errors?.["Email"] ? true : false}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <PasswordWoState
                id="Password"
                label="Password"
                onChange={props?.handleChange}
                onKeyDown={handleKeyDown}
                value={props?.formData?.["Password"] || ""}
                placeholder="Enter your password"
                helperText={props?.errors?.["Password"]}
                error={props?.errors?.["Password"] ? true : false}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <SubmitButton
                onClick={handleSave}
                text="Get Started"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            {/* <Grid size={{ xs: 12 }}>
              <SubmitButton
                onClick={handleSave}
                text="Get Started"
              />
            </Grid> */}

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              <div className="login-text">
                Don't have an account?{" "}
                <Button
                  className="loginButton"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    textTransform: "none"
                  }}
                  onClick={props?.openSignupPage}
                >
                  Register
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

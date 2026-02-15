import { Box, Button, Grid, Typography } from "@mui/material";
import TextFieldForForm from "../../../Components/TextFieldForForm";
import "../../../assets/Styles/Login.css";
import { useEffect } from "react";

const Login = (props) => {

  const handleSave = () => props?.handleSubmit();

  useEffect(() => {
    if (!props?.errors) return;

    const errorFields = Object.keys(props.errors);

    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const element = document.getElementById(firstErrorField);

      if (element) {
        element.focus();
      }
    }
  }, [props?.errors]);


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

          <Grid container spacing={5} className="grid-form">
            <Grid size={{ xs: 12 }}>
              <TextFieldForForm
                id="Name"
                label="Name"
                fullWidth
                autoFocus
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
                fullWidth
                type="email"
                onChange={props?.handleChange}
                value={props?.formData?.["Email"] || ""}
                placeholder="Enter your email"
                helperText={props?.errors?.["Email"]}
                error={props?.errors?.["Email"] ? true : false}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextFieldForForm
                id="Password"
                label="Password"
                fullWidth
                type="password"
                onChange={props?.handleChange}
                value={props?.formData?.["Password"] || ""}
                placeholder="Enter your password"
                helperText={props?.errors?.["Password"]}
                error={props?.errors?.["Password"] ? true : false}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                fullWidth
                className="submitButton"
                sx={{
                  height: "50px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
                onClick={handleSave}
              >
                Get Started
              </Button>
            </Grid>

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
                  onClick={props?.openLoginPage}
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

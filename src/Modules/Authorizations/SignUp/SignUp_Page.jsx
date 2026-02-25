import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../assets/Styles/SignUp_Page.css";
import TextFieldForForm from "../../../Components/TextFieldForForm";

const SignUp_Page = (props) => {


  const navigate = useNavigate();

  const openLoginPage = () => navigate(`/`, { replace: true });

  const handleSave = () => props?.handleSubmit();

  return (
    <>
      <Grid container className="mainContainer">
        {/* Image Section - Half Screen */}
        <Grid size={{ xs: 12, md: 6 }} className="imageSection">
          <img
            src="../../../assets/Signup_Images/signup.jpg"
            alt="Signup"
            className="signupImage"
          />
          <div className="imageOverlay">
            <Typography variant="h3" className="overlayText" fontWeight="bold">
              Join Our Community
            </Typography>
            <Typography variant="h6" className="overlaySubtext">
              Start your journey with us today
            </Typography>
          </div>
        </Grid>

        {/* Form Section - Fixed Width */}
        <Grid size={{ xs: 12, md: 6 }} className="formSection">
          <Box className="formContainer">
            <Typography variant="h4" align="center" fontWeight="bold" className="formTitle">
              Create Account
            </Typography>
            <Typography variant="body1" align="center" className="formSubtitle">
              Please Enter Your Details Below
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
              {/* Name */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" fontWeight="medium" className="inputLabel">
                  First Name*
                </Typography>
                <TextFieldForForm
                  id="Name"
                  fullWidth
                  autoFocus
                  onChange={props?.handleChange}
                  value={props?.formData?.["Name"] || ""}
                  placeholder="Enter your name"
                />
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" fontWeight="medium" className="inputLabel">
                  Email*
                </Typography>
                <TextFieldForForm
                  id="Email"
                  fullWidth
                  type="email"
                  onChange={props?.handleChange}
                  value={props?.formData?.["Email"] || ""}
                  placeholder="Enter your email"
                />
              </Grid>

              {/* Password */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" fontWeight="medium" className="inputLabel">
                  Password*
                </Typography>
                <TextFieldForForm
                  id="Password"
                  fullWidth
                  type="password"
                  onChange={props?.handleChange}
                  value={props?.formData?.["Password"] || ""}
                  placeholder="Enter your password"
                />
              </Grid>

              {/* Re-Enter Password */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" fontWeight="medium" className="inputLabel">
                  Re-Enter Password*
                </Typography>
                <TextFieldForForm
                  id="reEnterPassword"
                  fullWidth
                  type="password"
                  onChange={props?.handleChange}
                  value={props?.formData?.["reEnterPassword"] || ""}
                  placeholder="Re-enter your password"
                />
              </Grid>
            </Grid>

            {/* Button */}
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
                  Submit
                </Button>
              </Grid>

              {/* Already have an account */}
              <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                <Typography variant="body2" className="loginText">
                  Already have an account?{" "}
                  <Button
                    className="loginButton"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      textTransform: "none"
                    }}
                    onClick={openLoginPage}
                  >
                    Log in
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp_Page;

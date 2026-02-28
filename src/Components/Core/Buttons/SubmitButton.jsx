import { Button } from "@mui/material";

export const SubmitButton = (props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      className="submitButton"
      sx={{
        height: "35px",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
      onClick={props?.onClick}
    >
      {props?.text}
    </Button>
  )
}
export default SubmitButton;
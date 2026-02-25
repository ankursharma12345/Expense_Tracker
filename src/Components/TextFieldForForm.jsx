import { styled, TextField } from "@mui/material";
import { Fragment } from "react";

const StyledTextField = styled(TextField)({
  // '& .MuiOutlinedInput-root': {
  //   height: "35px",
  // },
  // '& .MuiFormHelperText-root': {
  //   margin: "0.2rem 0 0 0.3rem !important"
  // }
})


const TextFieldForForm = (props) => {

  const handleChange = (e) => {
    const { id, value } = e.target;
    props?.onChange(id, value);
  }

  return (
    <Fragment>
      <StyledTextField
        autoComplete="off"
        variant="outlined"
        autoFocus={props?.autoFocus}
        id={props?.id}
        label={props?.label}
        value={props?.value}
        placeholder={props?.placeholder}
        fullWidth
        helperText={props?.helperText}
        error={props?.error}
        // slotProps={{
        //   htmlInput: {
        //     onBlur: handleBlur
        //   }
        // }} 
        onChange={handleChange}

      />
    </Fragment>
  )
}
export default TextFieldForForm;
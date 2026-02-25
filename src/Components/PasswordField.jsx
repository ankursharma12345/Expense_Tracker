import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Icon, InputAdornment, TextField, styled } from "@mui/material";
import { useState } from "react";

export default function PasswordWoState(props) {
  const [showPassword, setValue] = useState();

  const handleClickShowPassword = () => setValue(!showPassword);

  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <TextField
      className="password"
      autoComplete="none"
      disabled={props.disabled}
      readOnly={props.readOnly}
      id={props.id}
      label={props.label}
      required={props.required}
      error={props.error}
      onClick={(e) => e.target.removeAttribute("readonly")}
      helperText={props.helperText}
      value={props.value || ""}
      type={showPassword ? "text" : "password"}
      fullWidth
      onChange={(event) => props.onChange(props.id, event.currentTarget.value)}
      name={props.name}
      onKeyUp={(e) => {
        e.stopPropagation();
      }}
      slotProps={{
         input: {
         endAdornment: (
         <InputAdornment position="end">
          <Icon
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          size="small"
          id="EyeIcon"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </Icon>
      </InputAdornment>
    ),
  },
}}
    />
  );
}
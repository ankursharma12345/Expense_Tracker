import { createTheme } from "@mui/material";

export const Theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 420,
          color: "#383838",
          transform: "translate(4px, -24px) scale(1)",
        },
        outlined: {
          " &.MuiFormLabel-root.MuiInputLabel-root.Mui-error.Mui-focused": {
            color: "#b20000 !important",
          },
          "&.MuiFormLabel-root.MuiInputLabel-root.Mui-error": {
            color: "#b20000",
          },

          "&.Mui-focused": {
            fontSize: 14,
            color: "#171717 !important", // Focus time All field label Color change
            padding: "0px",
            fontWeight: 600,
          },
          InputLabelProps: {
            sx: {
              "&.MuiInputLabel-animated": {
                fontSize: 15,
              },
            },
          },
        },
      },
    },
    MuiInputAdornment: {
  styleOverrides: {
    root: {
      "& svg": {
        cursor: "pointer",
      },
    },
  },
    },
    MuiFormHelperText: {
  styleOverrides: {
    root: {
      margin: "0.2rem 0 0 0.3rem",
    },
  },
},
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFormControl-root:focus": {
            backgroundColor: "#ebf3fd",
            borderRadius: "2px",
          },
          '& .MuiOutlinedInput-root': {
          height: "35px",
  },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: "#e3f2fd", // light blue
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cc0000",
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cc0000",
          },
        },
      },
    },


    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "rgb(224, 227, 231)",
          color: "black",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          // applies to all Grid (item + container)
        },
        container: {
          "&.grid-form": {
            marginTop: "2rem",
          }
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "26px",
        },
      },
    },
  },
})
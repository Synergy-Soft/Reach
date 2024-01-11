import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  //Theme colors from Figma iteration 1 page
  palette: {
    mode: "dark",
    background: {
      default: "gray",
    },
    primary: {
      main: "#007BFF",
      light: "#8bd18e80",
      outlinedBorder: "rgba(129, 199, 132, 0.50)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(224, 224, 224, 0.90)",
    },
    success: {
      main: "#198754",
      light: "#20C997",
    },
    warning: {
      main: "#FFC107",
    },
    error: {
      main: "#DC3545",
    },
    reach: {
      primary: "#FD7E14",
      light: "FFC5B8",
    },
    //Add parttime and bounty colors when needed.
    divider: "#6C757D",
  },

  //Typograpghy colors from text portion of Figma on iteration 1 and 2 pages
  typography: {
    h4: {
      fontWeight: 600,
      fontSize: 32,
      fontFamily: "Inter",
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
      fontFamily: "Poppins",
    },
    h6: {
      fontWeight: 600,
      fontSize: 20,
    },
    body1: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "0.15px",
      fontStyle: "normal",
      fontFamily: "Poppins",
    },
    body2: {
      fontWeight: 500,
      fontSize: 16,
      fontStyle: "italic",
      fontFamily: "Poppins",
    },
    caption: {
      fontWeight: 500,
      fontSize: 12,
    },
    overline: {
      fontWeight: 400,
      textTransform: "uppercase",
      fontSize: 12,
      letterSpacing: "1px",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
        sizeLarge: {
          borderRadius: 4,
          padding: "12px 24px",
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: "0.46px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:last-child": {
            paddingBottom: 8,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        // root: {
        //   borderRadius: 4,
        // },
        standardWarning: {
          color: "#663C00",
          backgroundColor: "#FFF4E5",
          "& .MuiAlert-icon": {
            color: "#EF6C00",
          },
        },
      },
    },
  },
});

export default theme;

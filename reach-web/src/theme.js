import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "gray",
    },
    primary: {
      main: "#0F974F",
      light: "#81C784",
      outlinedBorder: "rgba(129, 199, 132, 0.50)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(224, 224, 224, 0.90)",
    },
    success: {
      main: "#388E3C",
      light: "#4CAF50",
    },
    warning: {
      main: "#EF6C00",
    },
    error: {
      main: "##D32F2F",
      light: "#EF5350",
    },
    divider: "#FFFFFF80",
  },
  typography: {
    fontFamily: "poppins",
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
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
    },
    body2: {
      fontWeight: 500,
      fontSize: 16,
      fontStyle: "italic",
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

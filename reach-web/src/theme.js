import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  //Theme colors from Figma iteration 1 page
  palette: {
    mode: "light",
    background: {
      default: "#F8F9FA",
    },
    primary: {
      main: "#FD7E14",
      light: "#FAB57C",
    },
    secondary: {
      main: "#007BFF",
      light: "#69B1FF",
    },  
    text: {
      light: "#6C757D",
      dark: "#212529",
    },
  },

  //Typograpghy colors from text portion of Figma on iteration 1 and 2 pages
  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;

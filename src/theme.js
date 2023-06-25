import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#f3e5f5",
    },
  },
});

export default theme;

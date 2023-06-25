import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Bottom } from "./Page/Bottom";
import { NavBar } from "./Page/NavBar";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Outlet />
        <Bottom />
      </ThemeProvider>
    </>
  );
}

export default App;

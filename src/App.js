import logo from "./logo.svg";
import "./App.css";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar";
import Activity from "./components/Activity/Activity";
import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange, grey, lightGreen } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: lightGreen,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          button: {
            primary: deepOrange[900],
            secondary: deepOrange[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomAppBar mode={mode} setMode={setMode} />
        <Activity />
      </div>
    </ThemeProvider>
  );
}

export default App;

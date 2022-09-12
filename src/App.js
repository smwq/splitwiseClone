import logo from "./logo.svg";
import "./App.css";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar";
import Activity from "./components/Activity/Activity";
import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./theme";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomAppBar mode={mode} setMode={setMode} />
        {/* <Activity /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

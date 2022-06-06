import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";

export default function CustomAppBar({ mode, setMode }) {
  const handleModeChange = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Splitwise</Typography>
          <Button color="primary">Login</Button>
          <Switch
            checked={mode === "dark"}
            onChange={handleModeChange}
            name="toggleDark"
            color="default"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

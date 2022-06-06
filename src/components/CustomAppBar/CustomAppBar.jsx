import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

export default function CustomAppBar({ mode, setMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Splitwise</Typography>
          {/* <Button color="secondary">Login</Button> */}
          <SettingsMenu mode={mode} setMode={setMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

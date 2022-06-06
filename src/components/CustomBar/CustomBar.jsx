import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CustomBar({ handleaddExpenseDialogOpen, type, title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#EEEEEE" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              {title}
            </Typography>
          </div>
          {!type ? (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                sx={{
                  textTransform: "none",
                  margin: "0px 2px",
                }}
                color="primary"
                variant="contained"
                onClick={handleaddExpenseDialogOpen}
              >
                Add an expense
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  margin: "0px 2px",
                }}
                color="primary"
                variant="contained"
              >
                Settle up
              </Button>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

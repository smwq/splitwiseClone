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

export default getDesignTokens;

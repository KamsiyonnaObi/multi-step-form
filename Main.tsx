import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { Button, ThemeProvider, createTheme } from "@mui/material";

const container = document.getElementById("app");
const root = createRoot(container!);

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu",
          padding: "8px 12px",
          color: "var(--alabaster)",
          backgroundColor: "var(--marine-blue)",
          textTransform: "none",
        },
      },
    },
  },
});
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

"use client";

import { createTheme } from "@mui/material/styles";
//project imports
import GoogleQuicksand from "@/helpers/fonts";

const defaultTheme = createTheme({
  typography: {
    fontFamily: GoogleQuicksand.style.fontFamily,
    body1: { fontFamily: GoogleQuicksand.style.fontFamily },
    body2: { fontFamily: GoogleQuicksand.style.fontFamily },
  },
  palette: {
    primary: {
      main: "#1A1A1A",
      contrastText: "#c9c9c9",
    },
    secondary: {
      main: "#3d3d3d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          background: "none",
          border: "none",
          transition: "0.3s ease-in-out",
          padding: "0",
          textTransform: "inherit",
          color:
            ownerState.color === "primary"
              ? theme.palette.primary.contrastText
              : theme.palette.secondary.contrastText,

          fontWeight: "500",
          fontSize: "16px",
          ":hover": {
            color:
              ownerState.color === "primary"
                ? theme.palette.secondary.contrastText
                : theme.palette.primary.contrastText,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          textDecoration: "none",
          transition: "0.3s ease-in-out",
          color:
            ownerState.color === "primary"
              ? theme.palette.primary.contrastText
              : theme.palette.secondary.contrastText,

          fontWeight: "500",
          ":hover": {
            color:
              ownerState.color === "primary"
                ? theme.palette.secondary.contrastText
                : theme.palette.primary.contrastText,
          },
        }),
      },
    },
  },
});

export default defaultTheme;

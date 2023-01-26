import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypeText {
    tertiary: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
          `,
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: "64px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "rgb(77, 85, 91)",
          minHeight: 54,
          marginBottom: 24,
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 54,
          color: "white",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgb(255, 105, 0)",
    },
    text: {
      primary: "#00000",
      secondary: "#838683",
      tertiary: "rgb(255, 105, 0)",
    },
    common: {
      black: "#111111",
    },
  },
});

export default theme;

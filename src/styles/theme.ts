import { createTheme } from "@mui/system";

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
  },
  palette: {
    primary: {
      main: "rgb(255, 105, 0)",
    },
    text: {
      primary: "white",
      secondary: "#838683",
      tertiary: "rgb(255, 105, 0)",
    },
  },
});

export default theme;

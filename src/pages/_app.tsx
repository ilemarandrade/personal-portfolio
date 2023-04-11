import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

"use client";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#00acc1",
    },
  },
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

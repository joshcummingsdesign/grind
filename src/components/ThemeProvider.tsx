"use client";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

declare module "@mui/material/styles" {
  interface TypeBackground {
    surface: string;
  }
}

const colors = {
  primary: "#CDDC39",
  secondary: "#C6FF00",
  background: "#121212",
  paper: "#1A1A1A",
  surface: "#282828",
  border: "#333333",
  textPrimary: "#FFFFFF",
  textSecondary: "#9E9E9E",
};

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 800, color: colors.textPrimary },
    h2: { fontWeight: 800, color: colors.textPrimary },
    h3: { fontWeight: 700, color: colors.textPrimary },
    h4: { fontWeight: 700, color: colors.textPrimary },
    h5: { fontWeight: 700, color: colors.textPrimary },
    h6: { fontWeight: 700, color: colors.textPrimary },
    body1: { fontWeight: 300, color: colors.textSecondary },
    body2: { fontWeight: 300, color: colors.textSecondary },
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
      contrastText: "#000000",
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.paper,
      surface: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: colors.paper,
          border: `1px solid ${colors.border}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${colors.border}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontWeight: 600,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          alignItems: "flex-start",
          paddingTop: "10vh",
        },
        paper: {
          backgroundColor: colors.paper,
          border: `1px solid ${colors.border}`,
          width: "calc(100% - 40px)",
          margin: "32px 0",
        },
      },
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

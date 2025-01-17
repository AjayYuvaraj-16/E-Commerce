"use client";

import { ReactNode, useMemo } from "react";
// @mui
import CssBaseline from "@mui/material/CssBaseline";
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
    StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import typography from "./typography";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 6 },
            typography,
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}

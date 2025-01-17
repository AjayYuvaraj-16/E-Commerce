import { alpha } from "@mui/material/styles";

// SETUP COLORS
export const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F7F8F7",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#CBCDCD",
    600: "#637381",
    700: "#454F5B",
    800: "#7E8181",
    900: "#161C24",
};

export const COMMON = {
    black: "#111111",
    white: "#fff",
};

export const PRIMARY = {
    main: "#E7AB32",
};

export const SECONDARY = {
    main: "#2EC1AC",
};

export const TERTIARY = {
    main: "#E97171",
};

export const palette = {
    common: COMMON,
    primary: PRIMARY,
    secondary: SECONDARY,
    tertiary: TERTIARY,
    grey: GREY,
    divider: alpha(GREY[500], 0.24),
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
        paper: "#fff",
    },
    action: {
        active: GREY[600],
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[800], 1),
        disabledBackground: alpha(GREY[500], 1),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

export default palette;

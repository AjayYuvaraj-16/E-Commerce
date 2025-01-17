import { Theme } from "@mui/material/styles";

export default function Tooltip(theme: Theme) {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.primary.dark,
                    boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
                    borderRadius: 30,
                    padding: "12px 15px",
                },
                arrow: {
                    color: theme.palette.common.white,
                },
            },
        },
    };
}

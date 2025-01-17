import { Theme } from "@mui/material/styles";

export default function Typography(theme: Theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: theme.palette.common.black,
                },
                paragraph: {
                    marginBottom: theme.spacing(2),
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1),
                },
                caption: {
                    color: "#A3A7A8",
                },
            },
        },
    };
}

import { Theme } from "@mui/material/styles";

export default function MenuItem(theme: Theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                // root: {
                //     padding: "15px 20px",
                //     color: theme.palette.primary.dark,
                //     ":hover": {
                //         backgroundColor: theme.palette.secondary.light,
                //         color: theme.palette.secondary.main,
                //     },
                //     "&.Mui-selected": {
                //         ":hover": {
                //             backgroundColor: theme.palette.secondary.main,
                //             color: theme.palette.common.white,
                //         },
                //         backgroundColor: theme.palette.secondary.main,
                //         color: theme.palette.common.white,
                //         "&.Mui-focusVisible": {
                //             backgroundColor: theme.palette.secondary.main,
                //             color: theme.palette.common.white,
                //         },
                //     },
                // },
            },
        },
    };
}

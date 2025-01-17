import { Theme } from "@mui/material/styles";

export default function Menu(theme: Theme) {
    return {
        MuiMenu: {
            styleOverrides: {
                // root: {
                //     "& .MuiMenu-paper": {
                //         borderRadius: 30,
                //         minWidth: 160,
                //         marginTop: 5,
                //     },
                // },
            },
        },
    };
}

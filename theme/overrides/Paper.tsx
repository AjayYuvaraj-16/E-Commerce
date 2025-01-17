import { Theme } from "@mui/material/styles";

export default function Paper(theme: Theme) {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
                variantOutlined: {
                    border: "1px solid #E7E7E7;",
                },
            },
        },
    };
}

import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
    return {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&:focus": {
                        outline: "none",
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 3,
                    padding: "16px 32px 16px 32px",
                    "&:focus": {
                        outline: "none",
                    },
                    color: theme.palette.common.white,
                },

                sizeMedium: {
                    fontSize: 16,
                    fontWeight: 700,
                },

                outlinedPrimary: {
                    border: `2px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                    borderRadius: 6,
                    padding: "12px 50px 12px 50px",
                    "&:focus": {
                        outline: "none",
                    },
                },
                outlinedSecondary: {
                    border: `1px solid ${theme.palette.secondary.main}`,
                    color: theme.palette.secondary.main,
                    "&:focus": {
                        outline: "none",
                    },
                },

                containedPrimary: {
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.primary.main,
                    "&.Mui-disabled": {
                        color: theme.palette.common.white,
                    },
                },
                containedSecondary: {
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.secondary.main,
                    "&.Mui-disabled": {
                        color: theme.palette.common.white,
                    },
                },
            },
        },
    };
}

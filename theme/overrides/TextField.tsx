import { Theme } from "@mui/material/styles";

export default function TextField(theme: Theme) {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "--TextField-brandBorderColor":
                        theme.palette.secondary.main,
                    "--TextField-brandBorderHoverColor":
                        theme.palette.secondary.main,
                    "--TextField-brandBorderFocusedColor":
                        theme.palette.secondary.main,
                    "& .MuiInputLabel-filled": {
                        color: theme.palette.grey[800],
                        marginLeft: 14,
                        marginRight: 14,
                        "&.Mui-focused:not(.Mui-error)": {
                            color: theme.palette.primary.dark,
                        },
                    },
                    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
                        marginRight: 8,
                    },
                    "& .MuiInputAdornment-root.MuiInputAdornment-positionStart":
                        {
                            marginLeft: 12,
                        },
                    borderRadius: 8,
                },
            },
        },

        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: {
                    // "&:before, &:after": {
                    //     borderBottom: "none",
                    // },
                    // "&:hover:not(.Mui-disabled, .Mui-error):before": {
                    //     borderBottom: "none",
                    // },
                    // "&.Mui-focused:after": {
                    //     borderBottom: "none",
                    // },
                    borderRadius: 30,
                    overflow: "hidden",
                    backgroundColor: theme.palette.grey[200],
                    border: `2px solid ${theme.palette.grey[200]}`,
                    transition: theme.transitions.create([
                        "border-color",
                        "background-color",
                        "box-shadow",
                    ]),

                    "&:hover:not(.Mui-disabled, .Mui-error)": {
                        backgroundColor: theme.palette.common.white,
                        border: "2px solid var(--TextField-brandBorderHoverColor)  ",
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.common.white,
                        border: "2px solid var(--TextField-brandBorderFocusedColor) ",
                    },
                    "& .MuiFilledInput-input": {
                        paddingLeft: 25,
                        paddingRight: 25,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.common.white,
                        border: `2px solid ${theme.palette.grey[500]}`,
                    },
                },
                error: {
                    borderColor: theme.palette.error.main,
                    backgroundColor: theme.palette.grey[200],
                    "&:hover": {
                        backgroundColor: theme.palette.common.white,
                        borderColor: theme.palette.error.main,
                    },
                    "&.Mui-focused": {
                        borderColor: theme.palette.error.main,
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    // borderRadius: 8,
                    "&.MuiOutlinedInput-root": {
                        borderRadius: 30,
                    },
                    overflow: "hidden",
                    border: `2px solid ${theme.palette.grey[300]}`,
                    backgroundColor: theme.palette.common.white,
                    "&:hover:not(.Mui-disabled, .Mui-error)": {
                        border: "2px solid var(--TextField-brandBorderHoverColor)",
                    },
                    "&.Mui-focused": {
                        border: "2px solid var(--TextField-brandBorderFocusedColor)",
                    },
                    "& .MuiOutlinedInput-input": {
                        paddingLeft: 16,
                        paddingRight: 16,
                    },
                    "&.Mui-disabled": {
                        border: `2px solid ${theme.palette.grey[500]}`,
                    },
                },
                error: {
                    borderColor: theme.palette.error.main,
                    "&:hover": {
                        borderColor: theme.palette.error.main,
                    },
                    "&.Mui-focused": {
                        borderColor: theme.palette.error.main,
                    },
                },
            },
        },
    };
}

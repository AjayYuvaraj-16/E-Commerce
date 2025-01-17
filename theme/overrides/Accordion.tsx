import { Theme } from "@mui/material/styles";

function Accordion(theme: Theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "#e5e2ff",
                    padding: "15px 20px",
                    borderRadius: "30px !important",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&.Mui-expanded": {
                        backgroundColor: "#e5e2ff",
                        boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
                        transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                    },
                    "&:before": {
                        display: "none",
                    },
                },
            },
        },
    };
}

export default Accordion;

import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
    const inputGlobalStyles = (
        <MUIGlobalStyles
            styles={{
                "*": {
                    boxSizing: "border-box",
                    padding: 0,
                    margin: 0,
                },
                html: {
                    overflowX: "hidden",
                    scrollBehavior: "smooth",
                },
                body: {
                    WebkitFontSmoothing: "antialiased",
                    fontFamily: ["Poppins"].join(","),
                },
                img: {
                    display: "block",
                    maxWidth: "100%",
                },
                ul: {
                    margin: 0,
                    padding: 0,
                },
            }}
        />
    );

    return inputGlobalStyles;
}

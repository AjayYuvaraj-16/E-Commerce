import { Box, Container, SxProps, Theme } from "@mui/material";
import React from "react";

interface IWrapperContainerProps {
    children: React.ReactNode;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    wrapperContainerStyles?: SxProps<Theme>;
}

const WrapperContainer = ({
    children,
    width = "xl",
    wrapperContainerStyles,
}: IWrapperContainerProps) => {
    return (
        <Container maxWidth={width}>
            <Box sx={wrapperContainerStyles}>{children}</Box>
        </Container>
    );
};

export default WrapperContainer;

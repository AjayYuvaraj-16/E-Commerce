import { Box } from "@mui/material";
import React from "react";

interface IBannerLayoutProps {
    children?: React.ReactNode;
    imageUrl: string;
}

const BannerLayout = ({ children, imageUrl }: IBannerLayoutProps) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover", // Ensures the image covers the container
                backgroundPosition: "center", // Centers the image
                height: "100%",
                width: "100%", // Optional: To ensure full width
            }}
        >
            {children}
        </Box>
    );
};

export default BannerLayout;

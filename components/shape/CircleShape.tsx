import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

interface ICircleShapeProps{
    children: React.ReactNode;
    isDiscountedPercentage?: number;
    isNewArrival?: boolean;
    circleShapeStyleProps?: SxProps<Theme>;
}

const CircleShape = ({
    children,
    isDiscountedPercentage,
    isNewArrival,
    circleShapeStyleProps,
}: ICircleShapeProps) => {
    return (
        <Box
            sx={{
                height: isDiscountedPercentage || isNewArrival ? 48 : 30,
                width: isDiscountedPercentage || isNewArrival ? 48 : 30,
                borderRadius: "50%",
                backgroundColor: "common.white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...circleShapeStyleProps
            }}
        >
            {children}
        </Box>
    );
};

export default CircleShape;

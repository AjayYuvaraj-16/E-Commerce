import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { pxToRem } from "@/utils/remPxConverter";

interface ICategoryTileCardProps {
    Icon: React.ElementType;
    categoryName: string;
}

const CategoryTileCard = ({ Icon, categoryName }: ICategoryTileCardProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: pxToRem(170),
                height: pxToRem(145),
                borderRadius: pxToRem(4),
                border: "1px solid rgba(0, 0, 0, 0.30)",
            }}
        >
            <Stack gap={2}>
                <Icon sx={{ height: 56, width: 56 }} />
                <Typography>{categoryName}</Typography>
            </Stack>
        </Box>
    );
};

export default CategoryTileCard;

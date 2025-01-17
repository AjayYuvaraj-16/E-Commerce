import React from "react";
import { IconButton, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControl = ({ quantity, onIncrease, onDecrease }:QuantityControlProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="16px"
      bgcolor="#f8f8f8"
      padding="4px 12px"
    >
      <IconButton
        size="small"
        onClick={onDecrease}
        disabled={quantity <= 1}
        sx={{ padding: "4px" }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography variant="body1" sx={{ mx: 2 }}>
        {quantity}
      </Typography>
      <IconButton size="small" onClick={onIncrease} sx={{ padding: "4px" }}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default QuantityControl;

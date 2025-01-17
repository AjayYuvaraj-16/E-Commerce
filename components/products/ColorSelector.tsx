"use client";

import React, { useState } from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

interface ColorVariantProps {
  colors: string[]; 
}

const ColorVariants  = ({ colors }:ColorVariantProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <RadioGroup
        row
        value={selectedColor}
        onChange={handleChange}
        sx={{ display: "flex", gap: "8px" }}
      >
        {colors.map((color) => (
          <FormControlLabel
            key={color}
            value={color}
            control={
              <Radio
                sx={{
                  display: "none", // Hide the radio button
                }}
              />
            }
            label=""
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
              backgroundColor: color,
              border:
                selectedColor === color ? "2px solid #000" : "1px solid #ddd",
              cursor: "pointer",
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default function ColorVariantsWrapper() {
  const colors = ["#5AD", "#AAA", "#000", "#ACE", "#9F6"];
  return (
    <>
      <Box sx={{ mb: 2, color: "#757575" }}>Color</Box>
      <ColorVariants colors={colors} />
    </>

  );
}

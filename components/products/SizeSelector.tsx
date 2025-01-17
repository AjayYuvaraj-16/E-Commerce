'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface IsizeSelector {
  modifiers?: IVariant;
  onChange?: (size:string) => void;
}

interface IVariant {
  size?: string;
  sizeList?: string[]; 
  color?: string;
  colorList?: string[];
  onChange?: (value: string) => void;
}
const SizeSelector = ({modifiers}:IsizeSelector) => {
  const [selectedSize, setSelectedSize] = useState<string>(modifiers?.sizeList?.[0] || ''); 

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    console.log(newSize)
    setSelectedSize(newSize);

    if (modifiers?.onChange) {
      modifiers.onChange(newSize);
    }
  };


  return (

    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h4" gutterBottom sx={{color:'#000',fontWeight:500}}>
        {modifiers?.size || modifiers?.color}
      </Typography>
      {
      modifiers?.sizeList && modifiers.sizeList.length > 0 ? (
      <RadioGroup
        row
        value={selectedSize}
        onChange={handleSizeChange}
        sx={{ display: "flex", gap: "8px" }}
      >
        {modifiers?.sizeList?.map((size) => (
          <FormControlLabel
            key={size}
            value={size}
            control={<Radio color="primary" sx={{ display: "none" }} />}
            label={size}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "4px",
              border:
              selectedSize === size ? "2px solid #000" : "1px solid #ddd",
              cursor: "pointer",
              justifyContent: "center"
            }}
          />
        ))}
      </RadioGroup>
      ):(<></>)
    }
    </Box>
      
  );
};

export default SizeSelector;
'use client';

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { pxToRem } from '@/utils/remPxConverter';

interface IVariantInfoprops {
    variantData?:Array<{
        title?: string;
         info?: string;
      }>;
  
}


const ProductVariantInfoGrid = ({variantData}:IVariantInfoprops) => {
  return (
    <Box sx={{ padding: 4, backgroundColor:'#F6F6F6', borderRadius: 2,display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      borderCollapse: "collapse"}}>
        {variantData?.map((variant, index) => (
          <Box
          key={index}
          sx={{
            borderRight: (index + 1) % 3 !== 0 ? "1px solid #BEBCBD" : "none", // Right border
            borderBottom:
            index < variantData.length - 3 ? "1px solid #BEBCBD" : "none", // Bottom border
            padding: 2,
            textAlign: "left",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, color: "#807D7E", marginBottom: 1,fontSize:pxToRem(16) }}
          >
            {variant.title}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400, color: "#3C4242", marginBottom: 1,fontSize:pxToRem(16) }}>
            {variant.info}
          </Typography>
        </Box>
        ))}
    </Box>
  );
};

export default ProductVariantInfoGrid;

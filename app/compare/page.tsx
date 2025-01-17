"use client";
import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { useCart } from "@/components/cart/CartContextApi";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { Box, Paper, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import AccordionSection from "@/components/common/Accordion";

const customStylingAttr = {
  color: "red",
  maxWidth: "360px",
  maxHeight: "560px",
  borderRadius: 1,
};
const ComparePage = () => {
  const { compareList, clearCompare } = useCart();
  console.log(compareList);

  if (compareList.length === 0) {
    return <Typography>No products to compare.</Typography>;
  }

  return (
    <WrapperContainer>
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ my: 2.4 }}>
          Comapre
        </Typography>

        <Grid size={{ sm: 12, lg: 12 }}>
          <Grid container spacing={2}>
            {compareList?.map((compareItem) => {
              return (
                <Grid
                  key={compareItem?.id}
                  size={{ lg: 4, md: 4, sm: 6, xs: 12 }}
                >
                  {/* <Link href={`/categories/products/${compareItem.id}`} passHref style={{textDecoration:'none'}}> */}
                  <ProductCard
                    {...compareItem}
                    customAttr={customStylingAttr}
                  />
                  {/* </Link> */}
                </Grid>
              );
            })}
          </Grid>

          {/* key features */}

          {compareList &&
            compareList?.map((compareItem, pos) => (
              <AccordionSection key={pos} data={compareItem?.specification} />
            ))}
        </Grid>
      </Box>
    </WrapperContainer>
  );
};

export default ComparePage;

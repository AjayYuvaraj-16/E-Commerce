import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../cards/ProductCard";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { pxToRem } from "@/utils/remPxConverter";
import Button from "@mui/material/Button";

interface IsimiliarProductsProps {
  productsData?: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
    rating?: number;
    reviewCount?: number;
    category?: string;
    productInfo?: string;
    thumbnails?: Array<string>;
  }> | null;
}
const SimiliarProducts = ({ productsData }: IsimiliarProductsProps) => {
  const similiarProducts = productsData;
  return (
    <>
    {
        similiarProducts && 
        <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "28px",
            color: "#3C4242",
            fontWeight: 500,
            mb: pxToRem(24),
            pb: pxToRem(16),
          }}
        >
          Similiar Products
        </Typography>
        <Grid container spacing={1}>

        {
          similiarProducts?.map((product) => (

            <Grid  key={product.id}  size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
              {/* <Link
                href={`/categories/products/${product.id}`}
                passHref
                style={{ textDecoration: "none" }}
              > */}
                <ProductCard {...product} />
              {/* </Link> */}
            </Grid>
          ))
          
          }
        </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
          <Button variant="outlined">Show More</Button>

            </Grid>
      </Box>
    }

    </>
  );
};

export default SimiliarProducts;

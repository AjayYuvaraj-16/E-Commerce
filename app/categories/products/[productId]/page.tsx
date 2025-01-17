"use client";
import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Box,
  Avatar,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import { categoryProducts } from "@/mocks/categoryProducts";
import Grid from "@mui/material/Grid2";

import {
  CommentBankOutlined,
  Compare,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import SizeSelector from "@/components/products/SizeSelector";
import { useParams } from "next/navigation";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { pxToRem } from "@/utils/remPxConverter";
import { DeliveryIcon } from "@/assets/svg/DeliveryIcon";
import DescriptionTabs from "@/components/products/DescriptionTabs";
import ProductVariantInfoGrid from "@/components/products/ProductVariantInfoGrid";
import SimiliarProducts from "@/components/products/SimiliarProducts";
import ColorVariantsWrapper from "@/components/products/ColorSelector";
import { useCart } from "@/components/cart/CartContextApi";
import { useState } from "react";
const customStyling = () => {
  return {
    padding: "12px 0px 12px 10px",
    color: "#5C5F6A",
    border: "1px solid #5C5F6A",
    fontSize: "large",
  };
};

interface IcartProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}
const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    console.error("No productId provided");
    return null;
  }
  const { addToCart } = useCart();

  const product = categoryProducts
    .flatMap((item) => item.items)
    .find((prod) => prod.id === parseInt(productId));

  const handleAddToCart = (product: IcartProductProps) => {
    addToCart(product);
    // console.log("Product>>>",product);
  };

  if (!product) {
    return (
      <WrapperContainer>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h5" color="error">
            Product not found.
          </Typography>
        </Box>
      </WrapperContainer>
    );
  }

  return (
    <WrapperContainer>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {/* Product Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ResponsiveImage thumbnails={product?.thumbnails} />
          </Grid>

          {/* Product Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontSize: "32px", color: "#000000", fontWeight: 400 }}
            >
              {product?.title}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ my: pxToRem(20) }}>
              <Chip label="⭐ 4.2 (54 Reviews)" />
              <Chip label="IN STOCK" variant="outlined" />
            </Stack>
            <Typography
              variant="h5"
              color="primary"
              gutterBottom
              sx={{ color: "#000000", fontSize: "26px", fontWeight: 600 }}
            >
              Rs. {product?.price}
            </Typography>

            <Typography variant="body1" sx={{ my: pxToRem(20) }}>
              {product?.productInfo}
            </Typography>

            {/* Size Selector */}
            <SizeSelector modifiers={product?.variants || { sizeList: [] }} />

            {/* Color Options */}
            <Box sx={{ marginBottom: 2 }}>
              <ColorVariantsWrapper />
            </Box>

            <Box display="flex" gap={2} marginBottom={3}>
              <Button
                variant="outlined"
                startIcon={<FavoriteBorderOutlined />}
                sx={customStyling}
              ></Button>
              <Button
                variant="outlined"
                startIcon={<CompareArrowsIcon style={{}} />}
                sx={customStyling}
              ></Button>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  color: "#5C5F6A",
                  border: "1px solid #5C5F6A",
                  ":hover": {
                    backgroundColor: "#fff",
                    border: "1px solid #5C5F6A",
                  },
                }}
                onClick={() => {
                  handleAddToCart({
                    id: product?.id,
                    image:
                      typeof product?.image === "string" ? product?.image : "",
                    name: product?.title || "Unnamed Product",
                    price: product?.price,
                    quantity: 1,
                  });
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ flex: 1, borderRadius: "6px" }}
              >
                Buy Now
              </Button>
            </Box>

            <Grid container spacing={2}>
              {[
                {
                  label: "Free Delivery",
                  desc: "1-2 day",
                  icon: (
                    <DeliveryIcon
                      style={{
                        height: pxToRem(42),
                        width: pxToRem(42),
                        display: "block",
                        paddingRight: "10px",
                      }}
                    />
                  ),
                },
                {
                  label: "In Stock",
                  desc: "Today",
                  icon: (
                    <DeliveryIcon
                      style={{
                        height: pxToRem(42),
                        width: pxToRem(42),
                        display: "block",
                        paddingRight: "10px",
                      }}
                    />
                  ),
                },
                {
                  label: "Guaranteed",
                  desc: "1 year",
                  icon: (
                    <DeliveryIcon
                      style={{
                        height: pxToRem(42),
                        width: pxToRem(42),
                        display: "block",
                        paddingRight: "10px",
                      }}
                    />
                  ),
                },
              ].map((item, index) => (
                <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4 }} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
                      {item?.icon}
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* products description */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: "32px",
                  color: "#000000",
                  fontWeight: 400,
                  mb: pxToRem(24),
                  pb: pxToRem(16),
                }}
              >
                Product Description
              </Typography>
              <DescriptionTabs
                data={product?.description}
                reviews={product?.reviews}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProductVariantInfoGrid variantData={product?.variantInfo} />
            </Grid>
          </Grid>
        </Box>

        <SimiliarProducts productsData={product?.similiarProducts} />
      </Box>
    </WrapperContainer>
  );
};

export default ProductPage;

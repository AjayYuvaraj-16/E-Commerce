"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircleShape from "../shape/CircleShape";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button, styled } from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";
import { PriceDisplay } from "./TrendyProductCard";
import { StaticImageData } from "next/image";
import { useCart } from "../cart/CartContextApi";
import { ProductWishlist, ICompareList } from "../cart/CartContextApi";
import Link from "next/link";

export interface IProductListingCardsProps {
  pId: number;
  image?: string | StaticImageData;
  title?: string;
  shortDescription?: string;
  price?: number;
  discountedPrice?: number;
  discountPercentage?: number;
  quantity?: number;
  description?: string;
  reviews?: string;
  specification?: Array<{}>;
}
const TypographyBold = styled(Typography)({
  fontWeight: "bold",
});

const ProductListingCards = ({
  pId,
  image,
  title,
  shortDescription,
  price,
  discountedPrice,
  discountPercentage,
  description,
  reviews,
  specification,
}: IProductListingCardsProps) => {
  const {
    addToWishlist,
    wishlistItems,
    compareList,
    addToCompare,
    removeFromCompare,
    removeFromWishlist,
  } = useCart();

  const handleAddToWishlist = (product: ProductWishlist) => {
    addToWishlist(product);
    console.log("Product added to wishlist:", wishlistItems);
  };

  const isInCompareList = compareList.some((item) => item.id === pId);

  const handleAddToCompare = (product: ICompareList) => {
    addToCompare(product);
    console.log("Product added to compare:", product);
  };

  const handleCompareToggle = (product: ICompareList) => {
    if (isInCompareList) {
      removeFromCompare(pId);
    } else {
      addToCompare(product);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 270,
        maxHeight: pxToRem(410),
      }}
      key={pId}
    >
      <Box position={"relative"}>
        <Link href={`/categories/products/${pId}`} passHref>
          <CardMedia
            component="img"
            alt={image + "_trendyProduct"}
            width="100%"
            image={typeof image === "string" ? image : image?.src}
            style={{ borderRadius: 5, height: pxToRem(325), cursor: "pointer" }}
          />
        </Link>
        <Stack
          flexDirection={"row"}
          gap={0}
          sx={{ position: "absolute", top: 12, right: 10 }}
        >
          {/* wish and compare icons */}

          <Button
            onClick={() => {
              handleAddToWishlist({
                id: pId,
                image: typeof image === "string" ? image : image?.src,
                name: title || "Unnamed Product",
                price: price,
                quantity: 1,
                shortDescription: shortDescription,
                discountedPrice: discountedPrice,
                discountPercentage: discountPercentage,
              });
            }}
            sx={{ padding: 0, color: "#000", minWidth: pxToRem(42) }}
          >
            <CircleShape>
              <FavoriteBorderIcon fontSize="small" />
            </CircleShape>
          </Button>
          <Button
            onClick={() => {
              handleCompareToggle({
                id: pId,
                image: typeof image === "string" ? image : image?.src,
                name: title || "Unnamed Product",
                price: price,
                quantity: 1,
                shortDescription: shortDescription,
                discountedPrice: discountedPrice,
                discountPercentage: discountPercentage,
                description: description,
                reviews: reviews,
                specification: specification,
              });
            }}
            sx={{ padding: 0, color: "#000", minWidth: pxToRem(42) }}
          >
            <CircleShape>
              <CompareArrowsIcon fontSize="medium" />
            </CircleShape>
          </Button>
        </Stack>
      </Box>
      <Stack spacing={1} mt={1.875}>
        <TypographyBold variant="h6">{title}</TypographyBold>
        <Typography variant="subtitle1">{shortDescription}</Typography>
        <PriceDisplay
          actualPrice={price ? price : 0}
          discountedPrice={discountedPrice}
          discountPercentage={discountPercentage}
        />
      </Stack>
    </Card>
  );
};

export default ProductListingCards;

"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircleShape from "../shape/CircleShape";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { styled } from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";
import Link from "next/link";

interface ITrendyProductCardProps {
  id?: number;
  img: string;
  title: string;
  shortDescription?: string;
  price: number;
  discountedPrice?: number;
  discountPercentage?: number;
}

interface IPriceDisplayProps {
  actualPrice: number;
  discountedPrice?: number;
  discountPercentage?: number;
}

const TypographyBold = styled(Typography)({
  fontWeight: "bold",
});

export const PriceDisplay = ({
  actualPrice,
  discountedPrice,
  discountPercentage,
}: IPriceDisplayProps) => {
  return (
    <Stack flexDirection={"row"} gap={1}>
      <TypographyBold variant="subtitle1">
        ₹{discountedPrice || actualPrice}
      </TypographyBold>

      {discountedPrice && (
        <Stack flexDirection={"row"} gap={1}>
          <Typography
            variant="subtitle1"
            sx={{ textDecoration: "line-through", color: "gray" }}
          >
            ₹{actualPrice}
          </Typography>
          <Typography variant="subtitle1" color="tertiary.main">
            ({discountPercentage}% off)
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

const TrendyProductCard = ({
  id,
  img,
  title,
  shortDescription,
  price,
  discountedPrice,
  discountPercentage,
}: ITrendyProductCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 274,
        height: pxToRem(379),
        borderRadius: 1,
      }}
    >
      <Box position={"relative"}>
        <Link href={`/categories/products/${id}`} passHref>
          <CardMedia
            component="img"
            alt={img + "_trendyProduct"}
            width="100%"
            image={img}
            style={{ borderRadius: 5, height: pxToRem(279) }}
          />
        </Link>
        <Stack
          flexDirection={"row"}
          gap={1}
          sx={{ position: "absolute", top: 12, right: 10 }}
        >
          {/* wish and compare icons */}
          <CircleShape>
            <FavoriteBorderIcon fontSize="small" />
          </CircleShape>
          <CircleShape>
            <CompareArrowsIcon fontSize="small" />
          </CircleShape>
        </Stack>
      </Box>
      <Stack spacing={1} mt={1.875}>
        <TypographyBold variant="h6">{title}</TypographyBold>
        <Typography variant="subtitle1">{shortDescription}</Typography>
        <PriceDisplay
          actualPrice={price}
          discountedPrice={discountedPrice}
          discountPercentage={discountPercentage}
        />
      </Stack>
    </Card>
  );
};

export default TrendyProductCard;

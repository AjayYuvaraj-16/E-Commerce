"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircleShape from "../shape/CircleShape";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button, styled } from "@mui/material";
import { StaticImageData } from "next/image";
import { Favorite, FavoriteSharp } from "@mui/icons-material";
import { useCart } from "../cart/CartContextApi";
import { pxToRem } from "@/utils/remPxConverter";
import Link from "next/link";


interface IProductCardProps {
    id: number;
    image?: string | StaticImageData;
    name?: string;
    shortDescription?: string;
    price?: number;
    discountedPrice?: number;
    discountPercentage?: number;
    isNewArrival?: boolean;
    quantity?: number;
    customStyling?: {};
    customAttr?:{};
}


interface IPriceDisplayProps {
    actualPrice: number;
    discountedPrice?: number;
}

const TypographyBold = styled(Typography)({
    fontWeight: "600",
});

const PriceDisplay = ({ actualPrice, discountedPrice }: IPriceDisplayProps) => {
    return (
        <Stack flexDirection={"row"} gap={1}>
            <TypographyBold variant="h5">
                ₹{discountedPrice || actualPrice}
            </TypographyBold>

            {discountedPrice && (
                <Typography
                    variant="h5"
                    sx={{ textDecoration: "line-through", color: "gray" }}
                >
                    ₹{actualPrice}
                </Typography>
            )}
        </Stack>
    );
};

const ProductCard = ({
    id,
    image,
    name,
    shortDescription,
    price,
    discountedPrice,
    discountPercentage,
    isNewArrival,
    customStyling,
    customAttr
}: IProductCardProps) => {


    const { removeFromWishlist,removeFromCompare} = useCart();

    return (
        <Card
            style={customAttr?customAttr:{maxWidth: 285,
                maxHeight: 446,
                borderRadius: 1,}}  key={id}
        >
            <Box position={"relative"}>
            <Link href={`/categories/products/${id}`} passHref>
            <CardMedia
                    component="img"
                    alt={image + "_trendyProduct"}
                    height="301"
                    width="100%"
                    image={typeof image === 'string' ? image : image?.src} 
                    style={{ borderRadius: 10 }}
                />
                </Link>
                <Stack sx={{ position: "absolute", top: 12, left: 20 }}>
                    {/* Conditionally render badge */}
                    {discountPercentage ? (
                        <CircleShape
                            isDiscountedPercentage={discountPercentage}
                            circleShapeStyleProps={{
                                backgroundColor: "tertiary.main",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                        >
                            {discountPercentage}%
                        </CircleShape>
                    ) : isNewArrival ? (
                        <CircleShape
                            isNewArrival={true}
                            circleShapeStyleProps={{
                                backgroundColor: "secondary.main",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                        >
                            New
                        </CircleShape>
                    ) : null}
                </Stack>
                <Stack
                    flexDirection={"row"}
                    gap={1}
                    sx={{ position: "absolute", top: 12, right: 10 }}
                >
                    {/* wish and compare icons */}

                    {  customStyling ? (
                    <Button onClick={
                            () => removeFromWishlist(id)} sx={{padding:0,color:'#000',minWidth:pxToRem(42)}}>

                        <CircleShape>
                            <Favorite fontSize="small" style={customStyling} />
                        </CircleShape>
                    </Button>
                    ):(
                        <CircleShape>
                        <FavoriteBorderIcon fontSize="small" />
                      </CircleShape>
                    )
                    }

                  {  customAttr ? (
                    <Button onClick={
                            () => removeFromCompare(id)} sx={{padding:0,color:'#000',minWidth:pxToRem(42)}}>
                        <CircleShape>
                            <CompareArrowsIcon fontSize="small" style={customStyling} />
                        </CircleShape>
                    </Button>
                    ):(
                        <CircleShape>
                        <CompareArrowsIcon fontSize="small" />
                       </CircleShape>
                    )
                    }
                    
                </Stack>
            </Box>
            <CardContent>
                <Stack spacing={1}>
                    <TypographyBold variant="h2">{name}</TypographyBold>
                    <Typography variant="h5">
                        {shortDescription}
                    </Typography>
                    <PriceDisplay
                        actualPrice={price ? price: 0}
                        discountedPrice={discountedPrice}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProductCard;

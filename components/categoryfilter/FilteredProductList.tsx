import React from "react";
import { StaticImageData } from "next/image";
import ProductListingCards from "../cards/ProductListingCards";
import Grid from "@mui/material/Grid2";

interface Product {
    id: number;
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

interface FilteredProductListProps {
  products: Product[];
}

const FilteredProductList = ({ products }: FilteredProductListProps) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <ProductListingCards  key={product.id} {...product} pId={product?.id}/>
      ))}
    </Grid>
  );
};

export default FilteredProductList;

"use client";
import ProductCard from "@/components/cards/ProductCard";
import { useCart } from "@/components/cart/CartContextApi";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

const customStyling = {
  color: "red",
};
const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useCart();
  console.log(wishlistItems);

  return (
    <WrapperContainer>
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ my: 2.4 }}>
          Wishlist
        </Typography>

        <Grid size={{ sm: 12, lg: 12 }}>
          <Grid container spacing={3}>
            {wishlistItems?.map((wishlistItem) => {
              return (
                <Grid
                  key={wishlistItem?.id}
                  size={{ lg: 3, md: 3, sm: 6, xs: 12 }}
                >
                  {/* <Link href={`/categories/products/${wishlistItem.id}`} passHref style={{textDecoration:'none'}}> */}
                  <ProductCard
                    {...wishlistItem}
                    customStyling={customStyling}
                  />
                  {/* </Link> */}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </WrapperContainer>
  );
};

export default WishlistPage;

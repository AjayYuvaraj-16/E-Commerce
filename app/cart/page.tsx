"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cart/CartContextApi";
import CartTable from "@/components/cart/CartTable";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CartSummary from "@/components/cart/CartSummary";

const CartPage = () => {
  const { cart } = useCart();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // 1200px and above
  const isTablet = useMediaQuery(theme.breakpoints.between(900, 1200));
  return (
    <WrapperContainer>
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: isTablet ? 12 : 8, sm: 12 }}>
            <CartTable />
          </Grid>
          <Grid size={{ xs: 12, md: isTablet ? 12 : 4, sm: 12 }}>
            <CartSummary cartItems={cart} />
          </Grid>
        </Grid>
      </Box>
    </WrapperContainer>
  );
};

export default CartPage;

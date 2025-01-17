"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cart/CartContextApi";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CartSummary from "@/components/cart/CartSummary";

const PaymentPage = () => {
  const { cart } = useCart();

  return (
    <WrapperContainer>
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CartSummary
              paymentDetails={{ name: "Summary" }}
              cartItems={cart}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}></Grid>
        </Grid>
      </Box>
    </WrapperContainer>
  );
};

export default PaymentPage;

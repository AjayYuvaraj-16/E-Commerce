"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cart/CartContextApi";
import CartTable from "@/components/cart/CartTable";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CartSummary from "@/components/cart/CartSummary";
import AddressSelection from "@/components/Profile/AddressSelection";

const AddressPage = () => {
  const { cart } = useCart();

  return (
    <WrapperContainer>
      <Box sx={{ py: 4 }}>
        <AddressSelection />
      </Box>
    </WrapperContainer>
  );
};

export default AddressPage;

"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Edit, Close, ArrowForwardSharp } from "@mui/icons-material";
import { useCart } from "../cart/CartContextApi";
import { IAddressProps } from "@/components/cart/CartContextApi";
import Link from "next/link";


interface Address {
  id: number;
  label: string;
  type: "HOME" | "OFFICE";
  details: string;
  pincode: string;
}

const AddressSelection=() => {

  const { addAddress,AddressList } = useCart();

  console.log(AddressList,'>>>');


  const handleCheckoutButtonClick = (address:IAddressProps) => {
    addAddress(address);
   console.log(AddressList,"Addresses added");
};


  const [selectedAddress, setSelectedAddress] = useState<number | null>(1);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: "Hogwards",
      type: "HOME",
      details: "567 London some where near mystic village",
      pincode: "600069",
    },
    {
      id: 2,
      label: "Headoffice",
      type: "OFFICE",
      details: "567 London some where near mystic village",
      pincode: "600084",
    },
  ]);

  const handleSelectAddress = (id: number) => {
    setSelectedAddress(id);
  };

  const handleRemoveAddress = (id: number) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  return (
    <Box sx={{margin: "0 auto", padding: 4 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Select Address
      </Typography>
      <RadioGroup value={selectedAddress} onChange={(e) => handleSelectAddress(Number(e.target.value))}>
        {addresses.map((address) => (
          <Paper
            key={address.id}
            sx={{
              mb: 2,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: selectedAddress === address.id ? "2px solid #ECAC2C" : "1px solid #e0e0e0",
              backgroundColor: selectedAddress === address.id ? "#FFF8E1" : "#FAFAFA",
            }}
          >
            <Stack>
              <FormControlLabel
                value={address.id}
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {address.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#757575" }}>
                      {address.details}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#757575" }}>
                      {address.pincode}
                    </Typography>
                  </Box>
                }
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="primary">
                <Edit />
              </IconButton>
              <IconButton
                size="small"
                color="error"
                onClick={() => handleRemoveAddress(address.id)}
              >
                <Close />
              </IconButton>
            </Stack>
          </Paper>
        ))}
      </RadioGroup>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Button
        startIcon={<Add />}  onClick={()=>{

          handleCheckoutButtonClick({
          id:1,
          details:"",
          pincode:2,
         })}}
        sx={{ mt: 2, color: "#ECAC2C", fontWeight: "bold", fontSize: "1rem" }}
      >
        Add New Address
      </Button>

      <Button
      component={Link}
      href="/checkout/payment"
        startIcon={<ArrowForwardSharp />}  onClick={()=>{}}

        sx={{ mt: 2, color: "#ECAC2C", fontWeight: "bold", fontSize: "1rem" }}
      >
        Proceed to Checkout
      </Button>
      </Box>
      
    </Box>
  );
};

export default AddressSelection;

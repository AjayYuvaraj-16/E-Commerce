import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  ImageListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";
import Link from "next/link";

interface IcartSummary {
  cartItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  paymentDetails?: {
    name?: string;
  };
}

const CartSummary = ({ cartItems,paymentDetails }: IcartSummary) => {
  console.log(cartItems, "cart");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCheckoutClick = () => {
    // Simulate a condition where no address is selected
    if (cartItems.length === 0) {
      setErrorMessage("Please Add Products to cart to proceed to checkout!!");
    } else {
      // Proceed with the next step
      setErrorMessage(""); // Clear any existing error
    }
  };

  const subtotal = cartItems.reduce(
    (initialValue, item) => initialValue + item.price * item.quantity,
    0
  );
  const estimatedTax = Math.round(subtotal * 0.018); // 1.8% tax (example)
  const estimatedShipping = 0; // Replace with actual shipping logic if needed
  const total = subtotal + estimatedTax + estimatedShipping;

  const custumStyling = {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const styleBody = {
    fontSize: pxToRem(16),
    fontWeight: 500,
    color: "#000",
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Discount Code */}
      <Stack spacing={2} mb={2}>
      <Typography variant="h6" sx={styleBody}>
          {paymentDetails?.name}
        </Typography>
        <Typography variant="h6" sx={styleBody}>
          Discount code / Promo code
        </Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            placeholder="Enter Promo Code"
            size="small"
            variant="outlined"
            sx={{ bgcolor: "#f8f8f8", borderRadius: 1 }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#E7AB32",
              padding: "5px 25px 5px 25px",
              ":hover": { bgcolor: "#ffa000" },
            }}
          >
            Apply
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={2}>
        <Stack sx={custumStyling}>
          <Typography variant="h6" width="50%" sx={styleBody}>
            Product name
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            width="25%"
            sx={styleBody}
          >
            Portion
          </Typography>
          <Typography variant="h6" width="25%" textAlign="right" sx={styleBody}>
            Price
          </Typography>
        </Stack>

        {cartItems?.map((item) => (
          <Stack key={item.id} sx={custumStyling} spacing={2}>
            <Box sx={{ display: "flex", width: "50%", alignItems: "center" }}>
              <Link href={`/categories/products/${item.id}`}>
                <ImageListItem>
                  <img
                    src={item?.image}
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      maxWidth: 50,
                      marginRight: pxToRem(10),
                    }}
                    alt={item.name}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </ImageListItem>
              </Link>
              <Typography variant="body1" fontWeight="500">
                {item.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              width="25%"
            >
              (x{item.quantity})
            </Typography>
            <Typography
              variant="body1"
              fontWeight="500"
              width="25%"
              textAlign="right"
            >
              Rs.{item.price.toLocaleString()}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={styleBody}>
            Subtotal
          </Typography>
          <Typography variant="body2" fontWeight="500" sx={styleBody}>
            Rs.{subtotal.toLocaleString()}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Estimated Tax
          </Typography>
          <Typography variant="body2" fontWeight="500">
            Rs.{estimatedTax.toLocaleString()}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Estimated Shipping
          </Typography>
          <Typography variant="body2" fontWeight="500">
            Rs.{estimatedShipping.toLocaleString()}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Total */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={styleBody}>
          Total
        </Typography>
        <Typography variant="h6" sx={styleBody}>
          Rs.{total.toLocaleString()}
        </Typography>
      </Stack>

      {/* Checkout Button */}
{
  paymentDetails ? <></>
  : (
    cartItems?.length === 0 ? (
    <>
      <Button
        fullWidth
        variant="contained"
        onClick={handleCheckoutClick}
        sx={{
          bgcolor: "#E7AB32",
          color: "#FFFFFF",
          mt: 3,
          py: 1.5,
          lineHeight: "24px",
          fontSize: pxToRem(16),
          fontWeight: "500",
          ":hover": { bgcolor: "#ffa000" },
        }}
      >
        Checkout
      </Button>
      {errorMessage && (
        <Alert severity="error" sx={{ my: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </>
  ) : (
    <Button
      component={Link}
      href="/checkout/address"
      fullWidth
      onClick={handleCheckoutClick}
      variant="contained"
      sx={{
        bgcolor: "#E7AB32",
        color: "#FFFFFF",
        mt: 3,
        py: 1.5,
        lineHeight: "24px",
        fontSize: pxToRem(16),
        fontWeight: "500",
        ":hover": { bgcolor: "#ffa000" },
      }}
    >
      Checkout
    </Button>
  )

  )
}
      
    </Box>
  );
};

export default CartSummary;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCart } from "@/components/cart/CartContextApi";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";
import Link from "next/link";
import QuantityControl from "../common/QuantityControl";

const CartTable = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Details</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack spacing={2} direction="row">
                  <Link href={`/categories/products/${item.id}`}>
                    <CardMedia
                      component="img"
                      alt={item?.image + "_product"}
                      width="105px"
                      image={typeof item?.image === "string" ? item?.image : ""}
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        maxWidth: pxToRem(105),
                      }}
                    />
                  </Link>
                  <Box flex={1}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#3C4242",
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      {/* {item?.color} */}
                    </Typography>

                    <Button
                      sx={{
                        color: "#ECAC2C",
                        padding: 0,
                        fontSize: pxToRem(14),
                        marginTop: 1,
                        fontWeight: 500,
                        justifyContent: "start",
                        ":hover": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                      }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell align="right">
                <QuantityControl
                  quantity={item.quantity}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                />
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Typography
                  variant="body2"
                  sx={{ fontSize: "16px", color: "#000", fontWeight: 500 }}
                >
                  Rs.{item.price}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <button onClick={clearCart}>Clear Cart</button> */}
    </TableContainer>
  );
};

export default CartTable;

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { pxToRem } from "@/utils/remPxConverter";
import { CartIcon } from "@/assets/svg/CartIcon";
import { DispatchIcon } from "@/assets/svg/DispatchIcon";
import { ArrivedHubIcon } from "@/assets/svg/ArrivedHub";
import { DeliveryIcon } from "@/assets/svg/DeliveryIcon";


interface IOrderDetailProps {
  order: {
    id?: number;
    orderDate?: string;
    deliveryDate?: string;
    status?: string;
    paymentMethod?: string;
    total?: number;
    items: Array<{
      img: string;
      title: string;
      color: string;
      qty: number;
      price: number;
    }>;
  };
  onBack: () => void;
}

const OrderDetail = ({ order, onBack }:IOrderDetailProps) => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Back Button */}
      <Typography
        variant="h2"  
        sx={{ cursor: "pointer", mb: 5, color: "#3C4242",fontWeight: "bold",fontSize:pxToRem(24)}}
        onClick={onBack}
      >
        &larr; OrderDetails
      </Typography>

      {/* Order Summary */}
      <Card sx={{ p: 2, mb: 3, backgroundColor: "#FFF5E0" }}>
        <CardContent>
          <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
            <Grid columns={6}>
              <Typography variant="body1">
                <strong>Order no:</strong> #{order.id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Order Date: {order.orderDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estimated Delivery Date: {order.deliveryDate}
              </Typography>
            </Grid>
            <Grid columns={6}>
              <Typography variant="body1" textAlign="right">
                <strong>Total:</strong> Rs.{order.total}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="right"
              >
                Order Status: {order.status}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="right"
              >
                Payment Method: {order.paymentMethod}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Status Progress */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="body2" color="#FFB020" sx={{textAlign:'-webkit-center'}}>
        <CartIcon style={{ height: pxToRem(42), width:pxToRem(42),display:'block'}}/>
          Order Placed
        </Typography>
        <Typography variant="body2" color="#FFB020" sx={{textAlign:'-webkit-center'}}>
            <DispatchIcon style={{ height: pxToRem(42), width:pxToRem(42),display:'block'}}/>
          Dispatched
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:'-webkit-center'}}>
        <ArrivedHubIcon style={{ height: pxToRem(42), width:pxToRem(42),display:'block'}}/>
          Arrived Hub
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:'-webkit-center'}}>
        <DeliveryIcon style={{ height: pxToRem(42), width:pxToRem(42),display:'block'}}/>
          Delivered
        </Typography>
      </Box>

      {/* Items List */}
      {order.items.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center",justifyContent:'space-between' }}>
            <img
              src={item.img}
              alt={item.title}
              style={{ width: 110, height: 120, borderRadius: 8, marginRight: 16 }}
            />
            <Box sx={{flex:1}}>
              <Typography variant="body1">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {item.color}
              </Typography>
            </Box>
            <Typography variant="h3" color="text.secondary" sx={{textAlign:'center',flex:1}}>
                Qty: {item.qty}
              </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold",flex:1, textAlign:'right' }}>
              Rs.{item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default OrderDetail;

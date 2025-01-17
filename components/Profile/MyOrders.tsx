import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { StaticImageData } from 'next/image';
import OrderDetail from './OrderDetail';

interface IOrder {
  id?: number;
  img?: string | StaticImageData;
  title?: string;
  color?: string;
  qty?: number;
  price?: number;
  orderDate?: string;
  deliveryDate?: string;
  status?: string;
  statusColor?: string;
  paymentMethod?: string;
  total?: number;
  items: Array<{
    img: string;
    title: string;
    color: string;
    qty: number;
    price: number;
  }>;
  }


interface ImyOrdersProps {
    data?: Array<IOrder>
}


const MyOrders = ({data}:ImyOrdersProps) => {


    const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

    const handleViewDetail = (order: IOrder) => {
      setSelectedOrder(order);
    };
  
    const handleBack = () => {
      setSelectedOrder(null);
    };

    if (selectedOrder) {
        return <OrderDetail order={selectedOrder} onBack={handleBack} />;
      }
    
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{flexDirection:'column'}}>
        {data?.map((order) => (
          <Grid key={order.id}>
            <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
              {/* Image Section */}
              <CardMedia
                component="img"
                image={typeof order.img === 'string' ? order.img : order.img?.src}
                alt={order.title}
                sx={{ width: 110, height: 120, borderRadius: 1, mr: 2 }}
              />

              {/* Details Section */}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{color:'#3C4242',fontSize:'16px',fontFamily:'poppins'}}>{order.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Color:{order.color || 'N/A'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Qty: {order?.qty}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total: Rs.{order?.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontWeight: 'bold', color: order?.statusColor }}
                >
                  {order.status}
                </Typography>
              </CardContent>

              {/* Button Section */}
              <Button
                variant="contained"
                sx={{ bgcolor: '#FFB020', color: '#FFF', fontWeight: 'bold' }}
                onClick={() => handleViewDetail(order)}
              >
                View Detail
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyOrders;

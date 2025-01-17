

export const myOrder = [
    {
        id: 1,
        title: 'Black Printed T-shirt',
        color: 'Pink',
        qty: 1,
        price: 2300,
        status: 'In Progress',
        statusColor: '#FFB020',
        img: '/images/Shirt.png',
        orderDate: "2 June 2023 2:40 PM",
        deliveryDate: "8 June 2023",
        items: [
            {
              img: "/images/Shirt.png",
              title: "Black Printed T-shirt",
              color: "Pink",
              qty: 1,
              price: 2300,
            },
          ],
      },
      {
        id: 2,
        title: 'Black Printed T-shirt',
        color: 'Pink',
        qty: 1,
        price: 2300,
        status: 'Delivered',
        statusColor: '#00B020',
        img: '/images/orderimagetwo.png',
        orderDate: "2 June 2023 2:40 PM",
        deliveryDate: "8 June 2023",
        items: [
            {
              img: "/images/orderimagetwo.png",
              title: "Black Printed T-shirt",
              color: "Pink",
              qty: 1,
              price: 2300,
            },
          ],
      },
      {
        id: 3,
        title: 'Black Printed T-shirt',
        orderDate: "2 June 2023 2:40 PM",
        deliveryDate: "8 June 2023",
        color: 'Pink',
        qty: 1,
        price: 2300,
        status: 'Exchanged',
        statusColor: '#00C5B2',
        img: '/images/orderimageThree.png',
        items: [
            {
              img: "/images/orderimageThree.png",
              title: "Black Printed T-shirt",
              color: "Pink",
              qty: 1,
              price: 2300,
            },
          ],
      },
      {
        id: 4,
        title: 'Black Printed T-shirt',
        color: 'Pink',
        qty: 1,
        price: 2300,
        status: 'Returned',
        statusColor: '#FF0000',
        img: '/images/orderimageFour.jpeg',
        orderDate: "2 June 2023 2:40 PM",
        deliveryDate: "8 June 2023",
        items: [
            {
              img: "/images/orderimageFour.jpeg",
              title: "Black Printed T-shirt",
              color: "Pink",
              qty: 1,
              price: 2300,
            },
          ],
      },
];

export default myOrder;

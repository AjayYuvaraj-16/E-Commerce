'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Slider from 'react-slick';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import { pxToRem } from '@/utils/remPxConverter';



export interface IThumbnails {
  thumbnails?: string[];
}

const ResponsiveImageGallery = ({ thumbnails }: IThumbnails) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    thumbnails?.[0] || 'https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-kurta-in-yellow-v2-mxx175.jpg'
  );


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          vertical: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          vertical: false,
        },
      },
    ],
  };

  return (
    <Grid container spacing={6} justifyContent="space-between">
      <Grid  size={{xs:12, md:8}}>
        <ImageListItem style={{ height: pxToRem(485), overflow: 'hidden' }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: '100%',
              borderRadius: '8px',
              cursor: 'pointer',
              verticalAlign: 'middle',
              objectFit: 'contain',
              height: 'auto',
            }}
          />
        </ImageListItem>
      </Grid>

      <Grid size={{xs:12, md:4}}>
        {thumbnails && thumbnails.length > 0 ? (
          <Slider {...settings}>
            {thumbnails.map((thumbnail, index) => (
              <Box
                key={index}
                onClick={() => setSelectedImage(thumbnail)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  overflow: 'hidden',
                }}
              >
                <ImageListItem
                  style={{
                    border: selectedImage === thumbnail ? '2px solid #1976d2' : 'none',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'block',
                    width: '70px',
                    height: '80px',
                    textAlign: 'center',
                    paddingBottom: '5px',
                  }}
                >
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: '100%',
                      cursor: 'pointer',
                      height: 'auto',
                      verticalAlign: 'middle',
                    }}
                  />
                </ImageListItem>
              </Box>
            ))}
          </Slider>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No thumbnails available
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ResponsiveImageGallery;

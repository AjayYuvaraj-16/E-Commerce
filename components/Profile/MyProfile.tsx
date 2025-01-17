import React from 'react';
import { Avatar, Box, Typography, IconButton, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AvatarComp from './AvatarComp';
import Grid from '@mui/material/Grid2';
import { Span } from 'next/dist/trace';
const userInfo = {
  avatar: 'https://i.pravatar.cc/100', // Replace with the actual avatar URL
  name: 'Lamin Yamal',
  email: 'Yamalfemale@gmail.com',
  details: [
    { label: 'Name', value: 'Lamin Yamal' },
    { label: 'Email account', value: 'yourname@gmail.com' },
    { label: 'Age', value: '26' },
    { label: 'Gender', value: 'Female' },
    { label: 'Mobile number', value: '697989999' },
    { label: 'Location', value: 'India' },
  ],
};

const MyProfile = () => {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 770,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Box display="flex" alignItems="center">
        <AvatarComp widthX={100} heightY={100}/>
          <Box px={2}>
            <Typography variant="h4" fontWeight="500">
              {userInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {userInfo.email}
            </Typography>
          </Box>
        </Box>
        <IconButton sx={{ color: '#F2A83B' }}>
          <EditIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Details Section Using Box and CSS Grid */}
      <Grid container>
        {userInfo.details.map((detail, index) => (
          <React.Fragment key={index}>
            <Grid size={{sm:12, md:6}}>
                    <div className='custom-table-profile'  color="#1F2937" style={{fontWeight:"500"}}>{detail.label} : <span style={{fontWeight:"400"}} color="#4B5563">{detail.value}</span></div>
            </Grid>
            {index % 2 === 1 && <Divider sx={{ width: '100%', my: 1 }} />}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProfile;

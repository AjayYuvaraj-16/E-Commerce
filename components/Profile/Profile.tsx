import React from "react";
import AvatarComp from "./AvatarComp";
import { Box, Stack, Typography } from "@mui/material";
import DashboardLayout from "./DashboardLayout";
const Profile = () => {
  const data ={
    label: 'My Profile'
  }
  return (
    <>
      <Stack style={{ flexDirection: "row",alignItems:'center'}}>
        <AvatarComp widthX={200} heightY={200} />
        <Box sx={{ mr: "1rem",paddingX:'2rem',color:"#083A50" }}>
          <Typography variant="h2" sx={{color:"#083A50"}}>Lamin yamal</Typography>
          <p>Hello!, you can start your shopping streak.</p>
        </Box>
       </Stack>
        <DashboardLayout />
    </>

  );
};

export default Profile;

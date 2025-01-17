"use client";
import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MyProfile from "./MyProfile";
import TermsAndCondition from "./TermsAndCondition";
import MyOrders from "./MyOrders";
import myOrder from '@/mocks/myorders';

const links = [
  { label: "My Profile", content: <MyProfile /> },
  { label: "Payment Methods", content: "" },
  { label: "My Orders", content: <MyOrders data={myOrder} /> },
  { label: "Terms & Conditions", content: <TermsAndCondition/> },
  { label: "Logout", content: "" },
];

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(links[0].label);
  // console.log(activeTab);
  return (
    <Box display="flex" flexWrap="wrap">
      <Box width={300} display="flex" flexDirection="column" p={2}>
        <List className="custom-ul">
          {links.map((link) => (
            <ListItem key={link.label} disablePadding className="custom-List">
              <ListItemButton
                className="custom-List-button"
                onClick={() => setActiveTab(link.label)} // Set active tab
                selected={activeTab === link.label}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#FFF5E0",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  sx={{
                    ".MuiTypography-root": {
                      color: activeTab === link.label ? "#083A50" : "#CACED8", 
                      fontWeight: activeTab === link.label ? '500' : 'normal', 
                      fontFamily: 'Poppins',
                      lineHeight: '18.24px',
                      textAlign: 'left',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box flex={1} p={3} bgcolor="#fff">
        {links.find((link) => link.label === activeTab)?.content}
      </Box>
    </Box>
  );
};

export default DashboardLayout;

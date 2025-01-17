'use client';
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface IdescriptionTabProps {
  data?: string | undefined;
  reviews?: string | undefined;
}
const DescriptionTabs = ({ data, reviews }: IdescriptionTabProps) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
// console.log(value);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {data && <Tab label="Description" value="1" />}
            {reviews && <Tab label="Reviews" value="2" />}
          </TabList>
        </Box>
        {data && <TabPanel value="1">{data}</TabPanel>}
        {reviews && <TabPanel value="2">{reviews}</TabPanel>}
      </TabContext>
    </Box>
  );
};

export default DescriptionTabs;

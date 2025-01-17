import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import Accordion from "@mui/material/Accordion";
import { Typography } from "@mui/material";

interface IAccordionSectionProps {
  data?: Array<{
    title?: string;
    values?: Array<{
      name?: string;
      display?: string;
    }>;
  }>;
}
const AccordionSection = ({ data }: IAccordionSectionProps) => {
  return (
    <>
      {data?.map((item, index) => (
        <Accordion defaultExpanded key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h2" sx={{ my: 1 }}>
              {item?.title}
            </Typography>
          </AccordionSummary>
          <Grid container spacing={2}>
            {item?.values?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <AccordionDetails>
                  <Typography>{item?.name}</Typography>
                  <Typography>{item?.display}</Typography>
                </AccordionDetails>
              </Grid>
            ))}
          </Grid>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionSection;

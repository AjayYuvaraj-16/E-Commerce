"use client";
import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Collapse,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
  isCollapsible?: boolean;
}

interface FilterSidebarProps {
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const FilterSidebar = ({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) => {
  const [dialogOptions, setDialogOptions] = useState<FilterOption[] | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const filters: FilterSection[] = [
    {
      title: "Size",
      options: [
        { label: "XS", value: "xs" },
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" },
        { label: "2X", value: "2x" },
      ],
    },
    {
      title: "Brands",
      options: [
        { label: "Levis", value: "levis" },
        { label: "H&M", value: "hm" },
        { label: "Code", value: "code" },
        { label: "Allan Solly", value: "allan_solly" },
      ],
    },
    {
      title: "Price",
      options: [],
    },
    {
      title: "Colors",
      options: [
        { label: "Gray", value: "gray" },
        { label: "Black", value: "black" },
        { label: "Green", value: "green" },
        { label: "Yellow", value: "yellow" },
        { label: "Purple", value: "purple" },
      ],
    },
    {
      title: "Discounts",
      options: [
        { label: "More than 10%", value: "10" },
        { label: "More than 20%", value: "20" },
        { label: "More than 30%", value: "30" },
      ],
    },
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterType] || [];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [filterType]: currentValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentValues, value],
        };
      }
    });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleMoreClick = (options: FilterOption[]) => {
    setDialogOptions(options);
  };

  const handleDialogClose = () => {
    setDialogOptions(null);
  };

  const toggleCollapse = (sectionTitle: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <Box
      sx={{
        width: "300px",
        padding: "16px 24px",
        border: "1px solid #0000001A",
        borderRadius: pxToRem(20),
      }}
    >
      <Stack>
        <Typography
          variant="h5"
          sx={{
            fontSize: pxToRem(24),
            fontWeight: 500,
            marginBottom: pxToRem(20),
            color: "#000000",
          }}
        >
          Filters
        </Typography>
      </Stack>
      {filters.map((filter) => (
        <Box
          key={filter.title}
          sx={{ marginBottom: "6px", borderTop: "1px solid #0000001A", py: pxToRem(16) }}
        >
          <Typography
            variant="h6"
            sx={{
              cursor: filter.isCollapsible ? "pointer" : "default",
              fontWeight: 500,
              marginBottom: "8px",
              fontSize: pxToRem(18),
              color: "#000000",
            }}
            onClick={() => toggleCollapse(filter.title)}
          >
            {filter.title}
          </Typography>
          {filter.title === "Price" ? (
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={500}
              max={1500}
              sx={{ margin: "0 8px" }}
            />
          ) : (
            <Collapse in={!filter.isCollapsible || !collapsedSections[filter.title]}>
              {filter.options.slice(0, 4).map((option) => (
                <FormControlLabel
                  key={option.value}
                  label={option.label}
                  control={
                    <Checkbox
                      checked={selectedFilters[filter.title]?.includes(option.value) || false}
                      onChange={() => handleFilterChange(filter.title, option.value)}
                    />
                  }
                  labelPlacement="start"
                  sx={{
                    display: "flex",
                    marginLeft: "0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                />
              ))}
              {filter.options.length > 4 && (
                <Button
                  onClick={() => handleMoreClick(filter.options)}
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
                >
                  More
                </Button>
              )}
            </Collapse>
          )}
        </Box>
      ))}

      {dialogOptions && (
        <Dialog open={true} onClose={handleDialogClose}>
          <DialogTitle>More Options</DialogTitle>
          <DialogContent>
            {dialogOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                label={option.label}
                control={
                  <Checkbox
                    checked={selectedFilters["More"]?.includes(option.value) || false}
                    onChange={() => handleFilterChange("More", option.value)}
                  />
                }
                sx={{ display: "flex", marginBottom: 1 }}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default FilterSidebar;

"use client";
import React, { useState } from "react";
import { categoryProducts } from "@/mocks/categoryProducts";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import ProductListingCards from "@/components/cards/ProductListingCards";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import FilterSidebar from "@/components/categoryfilter/FilterSidebar";
import {
  Pagination,
  PaginationItem,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FilteredProductList from "@/components/categoryfilter/FilteredProductList";

const ITEMS_PER_PAGE = 9;
const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [priceRange, setPriceRange] = useState<number[]>([500, 1500]);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // 1200px and above
  const isTablet = useMediaQuery(theme.breakpoints.between(991, 1200));

  const category = categoryProducts.find(
    (cat) => cat.id === parseInt(categoryId)
  );
  console.log(category?.items);
  const products = category?.items || [];
  const filteredProducts = products?.filter((product) => {
    return Object.entries(selectedFilters).every(
      ([filterType, filterValues]) => {
        if (filterType === "Price") {
          const [minPrice, maxPrice] = priceRange;
          return product.price >= minPrice && product.price <= maxPrice;
        }
        return filterValues.includes(
          (product as any)[filterType.toLowerCase()]
        );
      }
    );
  });

  const isFiltering =
    Object.keys(selectedFilters).length > 0 ||
    priceRange[0] > 500 ||
    priceRange[1] < 1500;

  const paginatedItems = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  if (!category) {
    return (
      <div>
        <h1>Category not found</h1>
        <Link href="/categories">Back to Categories</Link>
      </div>
    );
  }

  return (
    <WrapperContainer>
      <Breadcrumbs />
      <h1 style={{ marginBottom: "3rem" }}>{category?.name}</h1>
      <p>{category?.description}</p>
      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, sm: isTablet ? 1 : 12, lg: 3 }}
          sx={{
            display: {
              xs: "none",
              sm: isTablet ? "block" : "none",
              md: "block",
            },
          }}
        >
          <FilterSidebar
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: isTablet ? 8 : 12, lg: 9 }}
          sx={{
            display: { xs: "block", sm: "block" },
          }}
        >
          <Grid container spacing={3}>
            {isFiltering ? (
              <FilteredProductList products={filteredProducts} />
            ) : (
              paginatedItems.map((item) => (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ProductListingCards {...item} pId={item.id} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* <Link href="/categories">Back to Categories</Link> */}

      {/* Pagination Section */}

      {totalPages != 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "20px" }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            renderItem={(item) => {
              if (item.type === "previous") {
                return (
                  <PaginationItem
                    {...item}
                    component="button"
                    children="Previous"
                    sx={{ fontWeight: "bold", minWidth: 80 }}
                  />
                );
              }
              // Customize Next button
              if (item.type === "next") {
                return (
                  <PaginationItem
                    {...item}
                    component="button"
                    children="Next"
                    sx={{ fontWeight: "bold", minWidth: 80 }}
                  />
                );
              }
              // Default pagination item (page numbers)
              return <PaginationItem {...item} />;
            }}
            hideNextButton={currentPage === totalPages} // Hide Next button on the last page
            hidePrevButton={currentPage === 1} // Hide Previous button on the first page
          />
        </Stack>
      )}
    </WrapperContainer>
  );
};

export default CategoryPage;

"use client";

import Grid from "@mui/material/Grid2";
import TrendyProductCard from "@/components/cards/TrendyProductCard";
import { trendyProducts } from "@/mocks/trendyProduct";
import TrendyArrivalsText from "@/components/shape/TrendyArrivalsText";

interface ITrendyLayoutProps {
    trendyCategory: string;
}

const TrendyLayout = ({ trendyCategory }: ITrendyLayoutProps) => {
    const filteredTrendyProducts = trendyProducts?.filter(
        (product) => product.category === trendyCategory
    );

    return (
        <Grid container rowGap={2}  sx={{
            justifyContent: "center",
          }}>
            <Grid size={{ sm: 12, lg: 4.5 }}>
                <TrendyArrivalsText
                    bgColor="primary.main"
                    title="TRENDY"
                    subtitle="ARRIVALS"
                    buttonName="Show More" 
                />
            </Grid>
            <Grid size={{ sm: 12, lg: 7.5 }} >
                <Grid container rowGap={3}>
                    {filteredTrendyProducts.slice(0, 4).map((trendyProduct) => {
                        return (
                            <Grid
                                key={trendyProduct.id}
                                size={{ lg: 4, md: 4, sm: 6, xs: 12 }}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                            >
                                <TrendyProductCard {...trendyProduct}  />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TrendyLayout;

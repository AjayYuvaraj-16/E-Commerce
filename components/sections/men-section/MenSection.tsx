"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { CardMedia, styled } from "@mui/material";

import WrapperContainer from "@/components/wrapper/WrapperContainer";
import WrapperStack from "@/components/wrapper/WrapperStack";
import BannerLayout from "@/layouts/BannerLayout";
import TrendyLayout from "@/layouts/TrendyLayout";

import { pxToRem } from "@/utils/remPxConverter";
import { BannerImage, PromotionImg } from "@/assets";
import categories from "@/mocks/categories";
import CategoryCard from "@/components/cards/CategoryCard";
import SectionHeader from "@/components/SectionHeader";
import PromotionBannerLayout from "@/layouts/PromotionBannerLayout";
import TrendyArrivalsText from "@/components/shape/TrendyArrivalsText";
import Image from "next/image";
import { fashionTrendsImage } from "@/assets";
import Link from "next/link";
const PromotionTypography = styled(Typography)({
  fontSize: pxToRem(26),
  lineHeight: pxToRem(38),
  color: "#000000",
});

interface BannerProps {
  image?: string;
}

const MenSection = ({image}:BannerProps) => {
  return (
    <WrapperStack wrapperStackStyles={{ gap: pxToRem(60) }}>
      <WrapperContainer>
      <img src={BannerImage.src} />
        <WrapperStack wrapperStackStyles={{ gap: pxToRem(60) }}>
          <BannerLayout imageUrl={BannerImage?.src} />
          <TrendyLayout trendyCategory="men" />
          <WrapperStack wrapperStackStyles={{ gap: pxToRem(40) }}>
            <SectionHeader sectionTitle="Shop by Category" />
            <Grid container rowGap={3}>
              {categories.map((category) => (
                <Grid
                  key={category.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link href={`/categories/${category.id}`} passHref style={{textDecoration:'none'}}>
                    <CategoryCard img={category.image} name={category.name} />
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="outlined">Show More</Button>
            </Box>

            <WrapperStack wrapperStackStyles={{ gap: pxToRem(40) }}>
              <SectionHeader sectionTitle="#Fashion Trends For Men" />
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  top: 0,
                }}
              >
                {/* <Image
                  src={fashionTrendsImage}
                  fill
                  alt="Promotion Banner"
                  style={{ objectFit: "cover",position: "static" }}
                /> */}
                                <CardMedia
                        component="img"
                        alt={fashionTrendsImage + "_Promotion Banner"}
                        width="100%"
                        image={typeof fashionTrendsImage === "string" ? image : fashionTrendsImage?.src} 
                        style={{ objectFit: "cover" }}
                    />
              </Box>
            </WrapperStack>
          </WrapperStack>
        </WrapperStack>
      </WrapperContainer>
      <WrapperStack wrapperStackStyles={{ gap: pxToRem(40) }}>
        <PromotionBannerLayout
          imageGrid={{ gridSizes: { sm: 12, md: 6, lg: 7 } }}
          contentGrid={{ gridSizes: { sm: 12, md: 6, lg: 5 } }}
          img={PromotionImg?.src}
        >
          <WrapperStack
            sx={{
              background:
                "linear-gradient(1deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%);",
              height: "100%",
              px: pxToRem(60),
              py: pxToRem(103),
            }}
          >
            <TrendyArrivalsText
              title="PAYDAY"
              subtitle="SALE NOW"
              bgColor="common.white"
              titleColor="common.black"
              subtitleColor="common.black"
              buttonName="SHOP NOW"
              btnColor="common.black"
              alignItems={"flex-start"}
            >
              <WrapperStack spacing={2}>
                <PromotionTypography variant="h3" fontWeight={500}>
                  Spend minimal Rs.100 get 30% off voucher code for your next
                  purchase
                </PromotionTypography>
                <PromotionTypography variant="h3" fontWeight={700}>
                  01 Dec 2024 - 01 Jan 2025
                </PromotionTypography>
                <PromotionTypography variant="h3" fontWeight={400}>
                  *Terms & Conditions apply
                </PromotionTypography>
              </WrapperStack>
            </TrendyArrivalsText>
          </WrapperStack>
        </PromotionBannerLayout>
      </WrapperStack>
    </WrapperStack>
  );
};

export default MenSection;

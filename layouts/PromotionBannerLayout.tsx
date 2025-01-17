import { pxToRem } from "@/utils/remPxConverter";
import { Box, CardMedia } from "@mui/material";
import Grid, { Grid2Props } from "@mui/material/Grid2";
import Image from "next/image";

interface IGridSlot {
    gridSizes: {
        sm?: number;
        md?: number;
        lg?: number;
    };
}

interface IPromotionBannerLayoutProps extends Grid2Props {
    imageGrid: IGridSlot; // Configuration for the image grid
    contentGrid: IGridSlot; // Configuration for the content grid
    img: string;
    children: React.ReactNode;
}

const PromotionBannerLayout = ({
    imageGrid,
    contentGrid,
    img,
    children,
    ...gridProps
}: IPromotionBannerLayoutProps) => {
    return (
        <Grid container {...gridProps} sx={{flexFlow:"wrap"}}>
            {/* Grid for the image */}
            <Grid size={{ ...imageGrid.gridSizes }}>
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        top: 0,
                    }}
                >
                                        <CardMedia
                        component="img"
                        alt={img + "_Promotion Banner"}
                        width="100%"
                        height="100%"
                        image={typeof img === 'string' ? img : img} 
                        style={{ objectFit: "cover" }}
                    />
                    {/* <Image
                        src={img}
                        fill
                        alt="Promotion Banner"
                        style={{ objectFit: "cover" }}
                    /> */}
                </Box>
            </Grid>

            {/* Grid for the children */}
            <Grid size={{ ...contentGrid.gridSizes }}>{children}</Grid>
        </Grid>
    );
};

export default PromotionBannerLayout;

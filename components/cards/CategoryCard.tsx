import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { pxToRem } from "@/utils/remPxConverter";
import { ArrowIcon } from "@/assets/index";
import { StaticImageData } from "next/image";
import { isStringImage } from "@/utils/isStringImage";

interface ICategoryCardProps {
    img: string | StaticImageData;
    name: string;
}

const CategoryCard = ({ img, name }: ICategoryCardProps) => {
    const imageUrl = isStringImage(img) ? img : img.src;

    return (
        <Card
            sx={{
                maxWidth: pxToRem(256),
                borderRadius: pxToRem(10.5),
            }}
        >
            <CardMedia
                component="img"
                alt={img + "_category"}
                width="100%"
                image={imageUrl}
                style={{ borderRadius: 10 }}
            />
            <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={0.5}
                mt={pxToRem(14)}
            >
                <Stack spacing={1}>
                    <Typography variant="h2">{name}</Typography>
                    <Typography variant="caption">Explore Now!</Typography>
                </Stack>
                <Stack>
                    <ArrowIcon style={{ height: 13, width: 18 }} />
                </Stack>
            </Stack>
        </Card>
    );
};

export default CategoryCard;

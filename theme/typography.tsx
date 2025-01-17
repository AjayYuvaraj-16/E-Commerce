import { pxToRem } from "@/utils/remPxConverter";

type ResponsiveFontSizesInput = {
    sm: number;
    md: number;
    lg: number;
};

type ResponsiveFontSizesOutput = {
    "@media (max-width:479px)": { fontSize: string };
    "@media (min-width:480px) and (max-width:767px)": { fontSize: string };
    "@media (min-width:768px) and (max-width:1279px)": { fontSize: string };
};

type TypographyVariant = {
    fontSize: string;
    lineHeight: number | string;
} & ResponsiveFontSizesOutput;

type Typography = {
    fontFamily: string;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: TypographyVariant;
    h2: TypographyVariant;
    h3: TypographyVariant;
    h4: TypographyVariant;
    h5: TypographyVariant;
    h6: TypographyVariant;
    subtitle1: Omit<TypographyVariant, keyof ResponsiveFontSizesOutput>;
};

export function responsiveFontSizes({
    sm,
    md,
    lg,
}: ResponsiveFontSizesInput): ResponsiveFontSizesOutput {
    return {
        "@media (max-width:479px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:480px) and (max-width:767px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:768px) and (max-width:1279px)": {
            fontSize: pxToRem(lg),
        },
    };
}

const typography: Typography = {
    fontFamily: ["Poppins", ""].join(","),
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontSize: pxToRem(36),
        lineHeight: pxToRem(52),
        ...responsiveFontSizes({ sm: 20, md: 28, lg: 36 }),
    },
    h2: {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(28.8),
        ...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
    },
    h3: {
        fontSize: pxToRem(20),
        lineHeight: pxToRem(30),
        ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
    },
    h4: {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(27),
        ...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
    },
    h5: {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(24),
        ...responsiveFontSizes({ sm: 12, md: 14, lg: 16 }),
    },
    h6: {
        fontSize: pxToRem(14),
        lineHeight: pxToRem(19),
        ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 }),
    },
    subtitle1: {
        fontSize: pxToRem(13),
        lineHeight: pxToRem(17),
    },
};

export default typography;

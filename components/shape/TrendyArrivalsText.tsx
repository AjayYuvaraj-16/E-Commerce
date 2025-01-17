"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";
import WrapperStack from "../wrapper/WrapperStack";
import { StackProps } from "@mui/material/Stack";

const BoldTypography = styled(Typography)({
    fontWeight: 900,
    fontSize: pxToRem(57),
    lineHeight: pxToRem(70),
});

const TrendyButton = styled(Button)({
    paddingLeft: pxToRem(48),
    paddingRight: pxToRem(48),
    paddingTop: pxToRem(12),
    paddingBottom: pxToRem(12),
    borderRadius: 6,
});

interface TrendyArrivalsTextProps extends StackProps {
    children?: React.ReactNode;
    buttonName: string;
    title: string;
    subtitle: string;
    bgColor?: string;
    titleColor?: string;
    subtitleColor?: string;
    btnColor?: string;
}

const TrendyArrivalsText = ({
    children,
    buttonName,
    title,
    subtitle,
    bgColor,
    titleColor,
    subtitleColor,
    btnColor,
    ...stackProps
}: TrendyArrivalsTextProps) => {
    return (
        <WrapperStack
            spacing={3}
            height={"100%"}
            alignItems="center"
            justifyContent={"center"}
            {...stackProps}
        >
            <WrapperStack>
                {/* Rotated Yellow Background */}
                <Box
                    sx={{
                        position: "relative",
                        display: "inline-block",
                    }}
                >
                    {/* Rotated Yellow Box */}
                    <Box
                        sx={{
                            backgroundColor: bgColor || "primary.main",
                            width: pxToRem(277),
                            height: pxToRem(66),
                            transform: "rotate(-2.017deg)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            px: 3,
                            py: 1,
                        }}
                    />
                    {/* "Trendy" Text */}
                    <BoldTypography
                        sx={{
                            color: titleColor || "white",
                            position: "relative",
                            zIndex: 1,
                            px: 3,
                            py: 1,
                        }}
                    >
                        {title || "Trendy"}
                    </BoldTypography>
                </Box>

                {/* "Arrivals" text */}
                <BoldTypography
                    color={subtitleColor || "common.black"}
                    sx={{ px: 3 }}
                >
                    {subtitle || "Arrivals"}
                </BoldTypography>
            </WrapperStack>
            {/* if there is children, render it */}
            {children}
            <TrendyButton
                variant="contained"
                sx={{ bgcolor: btnColor || "primary.main" }}
            >
                {buttonName || "Shop Now"}
            </TrendyButton>
        </WrapperStack>
    );
};

export default TrendyArrivalsText;

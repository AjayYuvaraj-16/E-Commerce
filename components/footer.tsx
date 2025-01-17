'use client';
import React from "react";
import Link from "next/link";
import { Box, Typography, TextField, Button, Divider, ImageListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { pxToRem } from "@/utils/remPxConverter";
import styled from "styled-components";
import WrapperContainer from "./wrapper/WrapperContainer";

const CustomTypography = styled(Typography)({
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    color: "white" 
});
const Footer = () => {
    const companyLinks = [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "/careers" },
        { label: "FAQs", href: "/faqs" },
        { label: "Teams", href: "/teams" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    const helpLinks = [
        { label: "Payments", href: "/payments" },
        { label: "Shipments", href: "/shipments" },
        { label: "Cancellation", href: "/cancellation" },
        { label: "Return", href: "/return" },
    ];

    const socialLinks = ["Facebook", "LinkedIn", "Instagram", "YouTube", "Twitter"];

    const footerLinks = [
        "Privacy Policy",
        "Terms of Use",
        "Sales and Refunds",
        "Legal",
        "Site Map",
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#121212",
                padding: "40px 20px",
                marginTop: "40px",
            }}
        >
        <WrapperContainer>

            <Grid container spacing={4}>
                {/* Logo and Address */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Link href="/">
                        <ImageListItem>
                            <img
                                src={`/images/logo.png`}
                                style={{
                                    width: "302px",
                                    objectFit: "contain",
                                }}
                                alt="Logo"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Link>
                    <CustomTypography
                        sx={{ marginTop: "10px",}}
                    >
                        Style paradice internet Private Limited, Somewhere in India Chennai,
                        500030, Hogwarts, India
                    </CustomTypography>
                </Grid>

                {/* Subscribe Section */}
                <Grid size={{ xs: 12, md: 2,sm:12 }}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                        Subscribe
                    </Typography>
                    <TextField
                        placeholder="First Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                        sx={{
                            borderRadius: "5px",
                            marginBottom: "10px",
                        }}
                    />
                    <TextField
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                        sx={{
                            borderRadius: "5px",
                            marginBottom: "10px",
                        }}
                    />
                    <Button
                        variant="outlined"
                        sx={{
                            width: "100%",
                            color: "#FFFFFF",
                            borderColor: "#FFFFFF",
                        }}
                    >
                        Subscribe
                    </Button>
                </Grid>

                {/* Company Links */}
                <Grid size={{ xs: 6, md: 2,sm:4 }}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                        Company
                    </Typography>
                    {companyLinks.map((link, index) => (
                        <Link key={index} href={link.href} passHref style={{textDecoration:'none'}}>
                            <CustomTypography
                                sx={{
                                    cursor: "pointer",
                                    marginBottom: "5px",
                                    textDecoration:"none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                {link.label}
                            </CustomTypography>
                        </Link>
                    ))}
                </Grid>

                {/* Social Links */}
                <Grid size={{ xs: 6, md: 2,sm:4 }}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                        Follow Us
                    </Typography>
                    {socialLinks.map((social, index) => (
                        <CustomTypography
                            key={index}
                            sx={{
                                cursor: "pointer",
                                marginBottom: "5px",
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            {social}
                        </CustomTypography>
                    ))}
                </Grid>

                {/* Help Links */}
                <Grid size={{ xs: 2, md: 2,sm:4 }}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                        HELP
                    </Typography>
                    {helpLinks.map((link, index) => (
                        <Link key={index} href={link.href} passHref style={{textDecoration:'none'}}>
                            <CustomTypography
                                sx={{
                                    cursor: "pointer",
                                    marginBottom: "5px",
                                    textDecoration:"none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                {link.label}
                            </CustomTypography>
                        </Link>
                    ))}
                </Grid>
            </Grid>

            <Divider sx={{ border: "none", marginY: "20px" }} />


            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    fontSize: "12px",
                    py:pxToRem(50),
                    backgroundColor: "#fff",
                    padding: "20px 10px",
                }}
            >
            {/* <WrapperContainer> */}

                <Typography variant="body2">© 2021 All Rights Reserved</Typography>
                <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {footerLinks.map((item, index) => (
                        <Typography variant="body2"
                            key={index}
                            sx={{
                                cursor: "pointer",
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>
                {/* </WrapperContainer> */}
            </Box>

            </WrapperContainer>

            {/* Bottom Footer */}
            

        </Box>
    );
};

export default Footer;

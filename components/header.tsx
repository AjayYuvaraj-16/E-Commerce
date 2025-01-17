"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import {
    Badge,
    Divider,
    ImageListItem,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import {
    AccountCircle,
    MoreVert as MoreIcon,
    PersonOutlineOutlined as PersonIcon,
    FavoriteBorderOutlined as WishlistIcon,
    LocalMallOutlined as CartIcon,
    SyncAltOutlined as CompareIcon,
} from "@mui/icons-material";
import WrapperContainer from "./wrapper/WrapperContainer";
import { useCart } from "./cart/CartContextApi";

const Header = () => {
    const { cart,wishlistItems,compareList } = useCart();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem component={Link} href="/profile">
                <IconButton size="large" color="inherit">
                    <PersonIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                <Typography variant="h5" fontWeight={600} color="inherit">
                    Profile
                </Typography>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem component={Link} href="/compare">
                <IconButton size="large" color="inherit">
                    <CompareIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                <Typography variant="h5" fontWeight={600} color="inherit">
                    Compare
                </Typography>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem component={Link} href="/wishlist">
                <IconButton size="large" color="inherit">
                    <WishlistIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                <Typography variant="h5" fontWeight={600} color="inherit">
                    Wishlist
                </Typography>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem component={Link} href="/cart">
                <IconButton size="large" color="inherit">
                    <Badge
                        badgeContent={4}
                        sx={{
                            "& .MuiBadge-badge": {
                                color: "white",
                                top: "-5px",
                                right: "-5px",
                            },
                        }}
                        color="primary"
                    >
                        <CartIcon />
                    </Badge>
                </IconButton>
                <Typography variant="h5" fontWeight={600} color="inherit">
                    Cart
                </Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <WrapperContainer>
            <Box sx={{ flexGrow: 1, color: "#5C5C5C", paddingY: "14px" }}>
                <Toolbar
                    style={{
                        padding: "0px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Link href="/">
                        <ImageListItem>
                            <img
                                src={`/images/logo.png`}
                                style={{
                                    width: "302px",
                                    height: "63px",
                                    objectFit: "contain",
                                }}
                                alt="Logo"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Link>
                    <Paper
                        component="form"
                        sx={{
                            p: "0px 10px",
                            borderRadius: "5px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #969696",
                            margin: "0px 20px",
                            boxShadow:
                                "0 0px 1px 1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter Your Product Name"
                            inputProps={{
                                "aria-label": 'Enter Your Product Name"',
                            }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            component={Link}
                            href="/profile"
                            size="large"
                            color="inherit"
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                ":hover":{
                                    background: "none",
                                }
                            }}
                        >
                            <PersonIcon sx={{ fontSize: "30px" }} />
                            <Typography variant="h5" fontWeight={600}>
                                Profile
                            </Typography>
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/compare"
                            size="large"
                            color="inherit"
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                ":hover":{
                                    background: "none",
                                }
                            }}
                        >
                            <Badge
                                badgeContent={compareList.reduce((count, item) => count + item.quantity, 0)}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "white",
                                        top: "-5px",
                                        right: "-5px",
                                    },
                                }}
                                color="primary"
                            >
                            <CompareIcon sx={{ fontSize: "30px" }} />
                            </Badge>
                            <Typography variant="h5" fontWeight={600}>
                                Compare
                            </Typography>
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/wishlist"
                            size="large"
                            color="inherit"
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                ":hover":{
                                    background: "none",
                                }
                            }}
                        >
                            <Badge
                                badgeContent={wishlistItems.reduce((count, item) => count + item.quantity, 0)}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "white",
                                        top: "-5px",
                                        right: "-5px",
                                    },
                                }}
                                color="primary"
                            >
                            <WishlistIcon />
                            </Badge>
                            <Typography variant="h5" fontWeight={600}>
                                Wishlist
                            </Typography>
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/cart"
                            size="large"
                            color="inherit"
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                ":hover":{
                                    background: "none",
                                }
                            }}
                        >
                            <Badge
                                badgeContent={cart.reduce((count, item) => count + item.quantity, 0)}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "white",
                                        top: "-5px",
                                        right: "-5px",
                                    },
                                }}
                                color="primary"
                            >
                                <CartIcon />
                            </Badge>
                            <Typography variant="h5" fontWeight={600}>
                                Cart
                            </Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                    {renderMobileMenu}
                </Toolbar>
            </Box>
        </WrapperContainer>
    );
};

export default Header;

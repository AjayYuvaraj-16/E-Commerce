"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs as MUIBreadcrumbs, Typography, Box } from "@mui/material";
import { pxToRem } from "@/utils/remPxConverter";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return isLast ? (
      <Typography key={href}  sx={{color:"#383838",fontSize:pxToRem(18),fontWeight: 600}}>
        {decodeURIComponent(segment)}
      </Typography>
    ) : (
      <Link
        key={href}
        href={href}
        style={{ textDecoration: "none", color: "#797979",fontSize:pxToRem(18),fontWeight: 600 }}
      >
        {decodeURIComponent(segment)}
      </Link>
    );
  });

  return (
    <Box sx={{ padding: "16px 0" }}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link href="/" style={{ textDecoration: "none", color: "#797979",fontSize:pxToRem(18),fontWeight: 600 }}>
          Home
        </Link>
        {breadcrumbs}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;

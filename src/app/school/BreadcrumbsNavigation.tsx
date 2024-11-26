"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

type TBreadCrumbProps = {
  titles?: string[]
}


const BreadcrumbNavigation: React.FC<TBreadCrumbProps> = ({titles}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        mx: "auto",
        border: "solid 1px #EEEEEE",
        maxWidth: "420px",
        width: "100%",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ my: 2, mx: 2 }}>
        <Link key="link-home" underline="hover" color="inherit" href="/">
          Home
        </Link>
        ;
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}/`;
          const title = titles ? titles[index] : link
          return pathNames.length - 1 === index ? (
            <Typography key={`link-${index}`} color="text.primary">{title}</Typography>
          ) : (
            <Link
              key={`link-${index}`}
              underline="hover"
              color="inherit"
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNavigation;

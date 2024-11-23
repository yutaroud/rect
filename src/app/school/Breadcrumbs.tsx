"use client";
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Typography } from "@mui/material";

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  console.info('Breadcrumb clicked.');
};

const BreadcrumbNavigation: React.FC = () => {
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
    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ my: 2,mx: 2 }}>
      <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/school" onClick={handleClick}>
        School
      </Link>
      <Typography color="text.primary">Course</Typography>
    </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNavigation;
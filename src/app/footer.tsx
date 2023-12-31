import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <React.Fragment>
      © RECT
      {new Date().getFullYear()}
    </React.Fragment>
  );
};

const Footer = () => {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
            <Copyright />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">お問い合わせ</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">プライバシーポリシー</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Footer;

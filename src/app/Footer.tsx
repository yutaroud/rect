import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Copyright = () => {
  return (
    <Typography variant="caption" mt={7} sx={{letterSpacing: "2px", fontSize: "14px", color: "#667FB9"}} component="p">
      <React.Fragment>
        ©RECT
        {new Date().getFullYear()}
      </React.Fragment>
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box component="footer" mt={12} sx={{ background: "#00298A", padding: "80px 0 50px" }}>
      <Box sx={{maxWidth: "800px", width: "100%", margin: "0 auto", padding: "0 16px", }}>
        <List>
          <ListItem sx={{padding: "0", marginTop: "12px"}}>
            <Link sx={{color: "#fff", textDecoration: "underline", fontSize: "14px"}} href="/">運営会社</Link>
          </ListItem>
          <ListItem sx={{padding: "0", marginTop: "12px"}}>
            <Link sx={{color: "#fff", textDecoration: "underline", fontSize: "14px"}}
             href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
              rel="noopener noreferrer"
              target="_blank"
            >
              お問い合わせ
            </Link>
          </ListItem>
          <ListItem sx={{padding: "0", marginTop: "12px"}}>
            <Link sx={{color: "#fff", textDecoration: "underline", fontSize: "14px"}} href="/privacy">プライバシーポリシー</Link>
          </ListItem>
          <ListItem sx={{padding: "0", marginTop: "12px"}}>
            <Link sx={{color: "#fff", textDecoration: "underline", fontSize: "14px"}} href="/announcement">電子公告</Link>
          </ListItem>
        </List>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;

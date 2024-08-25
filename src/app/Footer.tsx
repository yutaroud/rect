import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="caption" sx={{letterSpacing: "2px", fontSize: "14px", color: "#667FB9", marginTop: "50px"}} component="p">
      <React.Fragment>
        ©RECT
        {new Date().getFullYear()}
      </React.Fragment>
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ background: "#00298A", marginTop: "100px", padding: "80px 0 50px" }}>
      <Box sx={{maxWidth: "800px", width: "100%", margin: "0 auto", padding: "0 16px", }}>
        <Box component="ul" sx={{listStyle: "none",}}>
          <Box component="li" style={{fontSize: "14px"}}>
            <Link style={{color: "#fff", textDecoration: "underline"}} href="/">運営会社</Link>
          </Box>
          <Box component="li" style={{marginTop: "12px", fontSize: "14px"}}>
            <Link style={{color: "#fff", textDecoration: "underline"}}
              href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
              rel="noopener noreferrer"
              target="_blank"
            >
              お問い合わせ
            </Link>
          </Box>
          <Box component="li" style={{marginTop: "12px", fontSize: "14px"}}>
            <Link style={{color: "#fff", textDecoration: "underline"}} href="/privacy">プライバシーポリシー</Link>
          </Box>
          <Box component="li" style={{marginTop: "12px", fontSize: "14px"}}>
            <Link style={{color: "#fff", textDecoration: "underline"}} href="/announcement">電子公告</Link>
          </Box>
        </Box>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;

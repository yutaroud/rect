import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";

interface HeaderProps {
  switchLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ switchLogo }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000, boxShadow: "none", background: "none" }}>
      <Toolbar sx={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
        {switchLogo ? (
          <Box style={{ width: "420px",display: "flex" }}>
            <Image
              alt="Re:ProS"
              src="../../image/school/logo.png"
              width={150}
              height={25}
            />
          </Box>
        ) : (
          <Typography variant="h6" color="text.primary">
            <Link href="/">RE:CT</Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

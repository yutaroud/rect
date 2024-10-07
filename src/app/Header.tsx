import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import logoRectImg from "../../public/image/top/logo_rect.png";
import logoReprosImg from "../../public/image/school/logo.png";

interface HeaderProps {
  switchLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ switchLogo }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 2000, boxShadow: "none", background: "none" }}
    >
      {switchLogo ? (
        <Toolbar sx={{ backgroundColor: "#fff" }}>
          <Box style={{ width: "420px", display: "flex" }}>
            <Link href="/school">
              <Image
                alt="Re:ProS"
                src={logoReprosImg.src}
                width={150}
                height={25}
              />
            </Link>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar sx={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
          <Link href="/">
            <Image
              alt="RE:CT"
              src={logoRectImg.src}
              width={120}
              height={34}
            />
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;

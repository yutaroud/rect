"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import logoRectImg from "../../public/image/top/logo_rect.png";
import logoReprosImg from "../../public/image/school/logo.png";
import Button from "@mui/material/Button";
import { PlayCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface HeaderProps {
  switchLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ switchLogo }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/school/complete");
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 2000, boxShadow: "none", background: "none" }}
    >
      {switchLogo ? (
        <Toolbar sx={{ backgroundColor: "#fff" }}>
          <Box sx={{ width: "420px", display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
            <Link href="/school">
              <Image
                alt="Re:ProS(レプロス)"
                src={logoReprosImg.src}
                width={150}
                height={25}
                style={{verticalAlign: "bottom"}}
              />
            </Link>
            <Button
              variant="contained"
              size="large"
              sx={[
                {
                  fontSize: 14,
                  fontWeight: "bold",
                  py: 0.5,
                  px: 2,
                  borderRadius: 8,
                  bgcolor: "#EF6C00",
                  color: "#fff",
                  boxShadow: "none",
                  '& .MuiButton-endIcon': {
                    marginLeft: '4px',
                  },
                },
                {
                  "&:hover": {
                    backgroundColor: "#D46000",
                    boxShadow: "none",
                  }
                },
              ]}
              endIcon={<PlayCircle/>}
              onClick={handleClick}
            >
              無料体験受付中
            </Button>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar sx={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
          <Link href="/">
            <Image
              alt="RE:CT(レクト)"
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

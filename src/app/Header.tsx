import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from 'next/link'
import Box from "@mui/material/Box";
import Image from 'next/image';

interface HeaderProps {
  switchLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({switchLogo}) => {

  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
          {switchLogo ? 
          <Box style={{ maxWidth: '420px'}}><Image
            alt='Re:ProS'
            src='../../image/school/logo.png'
            width={140}
            height={38}
        /></Box> : <Typography variant="h6" color="text.primary"><Link href="/">RE:CT</Link></Typography> }
      </Toolbar>
    </AppBar>
  );
};

export default Header;

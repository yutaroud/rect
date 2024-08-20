import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from 'next/link'

interface HeaderProps {
  switchLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({switchLogo}) => {

  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <Typography variant="h6" color="text.primary">
          {switchLogo ? <Link href="/">Re:ProS</Link> : <Link href="/">RE:CT</Link> }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

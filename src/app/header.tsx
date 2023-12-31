import AppBar from "@mui/material/AppBar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <DashboardIcon
          sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
        />
        <Typography variant="h6" color="text.primary">
          RECT
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;

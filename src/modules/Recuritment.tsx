import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Recruitment = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
        padding: "150px 16px 0 16px",
      }}
  >
      <Typography variant="h2" sx={{fontWeight: "bold", letterSpacing: "5px", fontSize: "40px"}}>
        採用情報
      </Typography>
      <Typography variant="caption" align="center" component="span" sx={{fontSize: "17px", fontWeight: "bold", letterSpacing: "3px", color: "#C2C2C2"}}>
        Recruit
      </Typography>
      <Typography style={{ marginTop: 40 }}>現在、募集しておりません。</Typography>
    </Box>
  );
};

export default Recruitment;

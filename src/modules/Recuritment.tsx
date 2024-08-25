import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Box mt={4} sx={{width: "100%", borderRadius: "8px", padding: "56px 40px",backgroundImage: 'url(/image/top/img_hand.png)', backgroundSize: '320px', backgroundPosition: 'bottom right',backgroundRepeat: "no-repeat", backgroundColor: "#DFF0FF"}}>
        <Typography
        variant="caption"
        component="p"
          sx={{
            borderRadius: "50px",
            height: "auto",
            py: 3,
            px: 8,
            color: "#333",
            fontSize: "20px",
            textDecoration: "none",
            letterSpacing: "1px",
            display: "inline-block",
          }}
        >
          現在、募集しておりません
        </Typography>
      </Box>
    </Box>
  );
};

export default Recruitment;

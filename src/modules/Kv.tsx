import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Kv = () => {
  return (
  <Box mt={8} sx={{height: "500px", display: "flex", flexDirection: "column", justifyContent: "center","@media screen and (max-width:800px)": { padding: "96px 16px", height: "auto"}}}>
    <Box sx={{margin: "auto", maxWidth: "800px", width: "100%"}}>
     <Typography
        variant="h1"
        sx={{fontSize: "17px", fontWeight: "bold", letterSpacing: "3px", color: "#C2C2C2","@media screen and (max-width:800px)": { fontSize: "12px"},}}
      >
        RE:Communication Technology
      </Typography>
      <Typography
        variant="h1"
        mt={8}
        sx={{fontSize: "56px", fontWeight: "bold", letterSpacing: "3px", lineHeight: "1.6","@media screen and (max-width:800px)": { fontSize: "40px"}}}
      >
        社会のコミュニケーションを<br/>ITの力でもっと活発に
      </Typography>
    </Box>
  </Box>
  );
};

export default Kv;

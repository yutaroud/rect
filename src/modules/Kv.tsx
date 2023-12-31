import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Kv = () => {
  return (
    <Box
      component="section"
      sx={{
        pointerEvents: "none",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("/rect/background/productCurvyLines.png")',
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ mt: 8 }}>
        <Typography
          variant="h1"
          align="center"
          color="inherit"
        >
          RE:CT
        </Typography>
        <Typography
          variant="h2"
          align="center"
          color="inherit"
          sx={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          RE:Communication Technology
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h4"
          sx={{
            mt: { xs: 4, sm: 5 },
            fontWeight: "bold"
          }}
        >
          社会のコミュニケーションをITの力でもっと活発に
        </Typography>
      </Container>
    </Box>
  );
};

export default Kv;

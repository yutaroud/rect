import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Kv = () => {
  return (
    <Box
      component="section"
      sx={{
        marginTop: "56px",
        textAlign: "center",
      }}
    >
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h1">RE:CT</Typography>
        <Typography variant="h2">RE:Communication Technology</Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          社会のコミュニケーションをITの力でもっと活発に
        </Typography>
      </Container>
    </Box>
  );
};

export default Kv;

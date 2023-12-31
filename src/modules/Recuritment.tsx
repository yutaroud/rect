import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Recruitment = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        backgroundColor: "#e9f9fc;",
      }}
    >
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h4" align="center">
          採用情報
        </Typography>
        <p>現在、募集しておりません。</p>
      </Container>
    </Box>
  );
};

export default Recruitment;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Business = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
      }}
    >
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h4" align="center">
          事業内容
        </Typography>
      </Container>
    </Box>
  );
};

export default Business;

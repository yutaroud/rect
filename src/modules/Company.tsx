import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Company = () => {
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
          会社概要
        </Typography>
      </Container>
    </Box>
  );
};

export default Company;

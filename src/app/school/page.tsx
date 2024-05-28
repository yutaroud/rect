import "../globals.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const School = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: "center",
        }}
        position="relative"
      >
        <Container sx={{ mt: 8 }}>
          <h1>プログラミング教室</h1>
        </Container>
      </Box>
    </main>
  );
};

export default School;

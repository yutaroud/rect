import "../globals.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Demand = () => {
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
          <h1>開発等の相談</h1>
        </Container>
      </Box>
    </main>
  );
};

export default Demand;

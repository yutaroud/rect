import "../globals.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Policy } from "@mui/icons-material";

const Privacy = () => {
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
          <h1>プライバシーポリシー</h1>
          <Policy />
        </Container>
      </Box>
    </main>
  );
};

export default Privacy;

import "../globals.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Post from "./Post";

const Announcement = () => {
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
          <h1>電子公告</h1>
          <Post />
        </Container>
      </Box>
    </main>
  );
};

export default Announcement;

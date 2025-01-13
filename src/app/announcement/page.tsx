import '../globals.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Post from './Post';
import { Typography } from '@mui/material';

const Announcement = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: 'center',
        }}
        position="relative"
      >
        <Container sx={{ mt: 8 }}>
          <Typography variant="h1" fontSize={24} fontWeight={700} gutterBottom>
            電子公告
          </Typography>
          <Post />
        </Container>
      </Box>
    </main>
  );
};

export default Announcement;

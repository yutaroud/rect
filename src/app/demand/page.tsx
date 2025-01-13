import '../globals.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Demand = () => {
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
          <Typography variant="h1" fontSize={24} fontWeight={700} gutterBottom>開発等の相談</Typography>
          <p>下記より、連絡先を明記の上、ご連絡ください。</p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexsVLTHkqbV6XYvG_5X8PBckIWwYf3mXybYD7PKg0YU9IL5A/viewform"
            style={{ maxWidth: '90vw', height: '930px', width: '720px' }}
          />
        </Container>
      </Box>
    </main>
  );
};

export default Demand;

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LocalPhone, KeyboardArrowRight } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box pt={7} pb={7} px={3} bgcolor='#407BFF'>
      <Typography variant="h2"><img src="../../image/school/heading_cta.png" alt="お気軽にお問合せください" width="236" /></Typography>
      <Box mt={3}>
        <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff'}} endIcon={<KeyboardArrowRight/>} href="https://docs.google.com/forms/d/e/1FAIpQLSexsVLTHkqbV6XYvG_5X8PBckIWwYf3mXybYD7PKg0YU9IL5A/viewform">無料体験を申し込む</Button>
        <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} endIcon={<KeyboardArrowRight/>} href="https://docs.google.com/forms/d/e/1FAIpQLSexsVLTHkqbV6XYvG_5X8PBckIWwYf3mXybYD7PKg0YU9IL5A/viewform">入会する</Button>
      </Box>
      <Typography variant="body2" mt={5} color='#fff' fontWeight='bold'>その他、お問合せやご相談は<br/>お電話ください</Typography>
      <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} startIcon={<LocalPhone/>} href="tel:080-3945-1221">080-3945-1221</Button>
    </Box>
  );
};

export default Contact;
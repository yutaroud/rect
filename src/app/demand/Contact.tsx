import Heading2 from './components/Heading2'
import CustomButton from './components/Button'
import { Box,Typography } from '@mui/material';
import img from '../../../public/image/demand/contact.webp';

const sxStyles = {
  text: {
    fontSize: '14px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
    color: '#fff',
    mt: 2,
    '& + &': {
      mt: 1,
    },
  }
}

const Contact = () => {
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        mx: 'auto',
        backgroundColor: '#00298A',
        borderRadius: '20px',
        px: 7,
        pt: 7,
        pb: 8,
        my: 7,
        position: 'relative',
      }}>
        <Heading2 subText="contact" mainText="お問い合わせ" position="right" backGroundWhite={false}/>
        <Typography sx={sxStyles.text}>相談は無料です。小さなことでも、お気軽にご連絡ください。</Typography>
        <Box mt={4}>
          <CustomButton
            label="お問い合わせフォームへ"
            variant="secondary"
            showFreeLabel={false}
            icon="arrow-right"
            href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '60px',
        }}>
          <img
            src={img.src}
            alt=""
            width="570"
            height="434"
            style={{ maxWidth: '284px', height: 'auto', }}
          />
        </Box>
    </Box>
  )
}
export default Contact;
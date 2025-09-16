import { Box, Typography } from '@mui/material';

interface Heading2Props {
  subText: string;
  mainText: string;
  position?: 'center' | 'right';
  backGroundWhite?: boolean;
}

export const Heading2: React.FC<Heading2Props> = ({
  subText,
  mainText,
  position="center",
  backGroundWhite = true,
  }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: position === 'right' ? 'flex-start' : 'center',
      textAlign: position === 'right' ? 'left' : 'center',
      gap: '4px'
    }}>
      <Typography
        variant="body2"
        component="span"
        sx={{
          color: backGroundWhite ? 'rgba(0, 41, 138, 0.4)' : 'rgba(255, 255, 255, 0.4)',
          fontWeight: 'bold',
          letterSpacing: '0.07em',
          fontSize: '18px'
        }}
      >
        {subText}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          fontSize: '36px',
          color: backGroundWhite ? '#000' : '#fff',
        }}
      >
        {mainText}
      </Typography>
    </Box>
  )
}

export default Heading2;
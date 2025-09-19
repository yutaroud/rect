import { Box, Typography } from '@mui/material';
import { sxStyles } from './Style'
import { alpha } from '@mui/system';

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
      gap: '4px',
      '@media screen and (max-width:450px)': {
        alignItems: 'center',
        textAlign: 'center',
      }
    }}>
      <Typography
        variant="body2"
        component="span"
        sx={{
          color: backGroundWhite ? alpha(sxStyles.color.primary, 0.4) : alpha(sxStyles.color.white, 0.4),
          fontWeight: 'bold',
          letterSpacing: '0.07em',
          fontSize: '18px',
          '@media screen and (max-width:450px)': {
            fontSize: '14px',
          }
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
          color: backGroundWhite ? sxStyles.color.black : sxStyles.color.white,
          '@media screen and (max-width:450px)': {
            fontSize: '32px',
          }
        }}
      >
        {mainText}
      </Typography>
    </Box>
  )
}

export default Heading2;
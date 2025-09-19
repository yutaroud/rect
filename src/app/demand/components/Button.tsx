import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { sxStyles } from './Style'

interface CustomButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  showFreeLabel?: boolean;
  icon?: 'arrow-right' | 'new-tab';
  href?: string;
}


const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = 'primary',
  showFreeLabel = true,
  icon,
  href,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'arrow-right':
        return <ArrowForwardIcon />;
      case 'new-tab':
        return <OpenInNewIcon />;
      default:
        return null;
    }
  };
  
  const hasIcon = !!icon; 

  return (
    <Button
      variant="contained"
      href={href}
      sx={{
        backgroundColor: variant === 'primary' ? sxStyles.color.primary : sxStyles.color.white,
        color: variant === 'primary' ? sxStyles.color.white : sxStyles.color.primary,
        textTransform: 'none',
        padding: hasIcon ? '16px 20px 16px 25px' : '16px 20px 16px 20px',
        borderRadius: '50px',
        boxShadow: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '0.06em',
        minWidth: '300px',
        transition: 'filter 0.3s',
        '&:hover': {
          boxShadow: 'none',
          filter: 'brightness(0.8)'
        },
      }}
      endIcon={getIcon()}
    >
      <Box
        component="span"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: showFreeLabel ? '8px' : '0px',
        }}
      >
        {showFreeLabel && (
          <Typography
            component="span"
            sx={{
              backgroundColor: variant === 'primary' ? sxStyles.color.white : sxStyles.color.primary,
              color: variant === 'primary' ? sxStyles.color.primary : sxStyles.color.white,
              borderRadius: '4px',
              px: '6px',
              py: '2px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            無料
          </Typography>
        )}
        {label}
      </Box>
    </Button>
  );
};

export default CustomButton;
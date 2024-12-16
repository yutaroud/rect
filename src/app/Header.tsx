'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoRectImg from '../../public/image/top/logo_rect.png';
import logoReprosImg from '../../public/image/school/logo.png';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const sxStyles = {
  schoolHeader: {
    width: '980px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
    mx: 'auto',
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    py: 0.5,
    px: 2,
    borderRadius: 8,
    bgcolor: '#EF6C00',
    color: '#fff',
    boxShadow: 'none',
    '& .MuiButton-endIcon': {
      marginLeft: '4px',
    },
    '&:hover': {
      backgroundColor: '#D46000',
      boxShadow: 'none',
    },
  },
};

interface HeaderProps {
  isSchoolPage?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/school/complete');
  };
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, boxShadow: 'none', background: 'none' }}
    >
      {isSchoolPage ? (
        <Toolbar sx={{ backgroundColor: '#fff' }}>
          <Box sx={sxStyles.schoolHeader}>
            <Link href="/school">
              <Image
                alt="Re:ProS(レプロス)"
                src={logoReprosImg.src}
                width={150}
                height={25}
                style={{ verticalAlign: 'bottom' }}
              />
            </Link>
            <Button
              variant="contained"
              sx={sxStyles.button}
              endIcon={<PlayCircle />}
              onClick={handleClick}
            >
              無料体験受付中
            </Button>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <Link href="/">
            <Image
              alt="RE:CT(レクト)"
              src={logoRectImg.src}
              width={120}
              height={34}
            />
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;

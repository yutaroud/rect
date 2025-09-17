
import { Box,Typography } from '@mui/material';
import CustomButton from './components/Button'
import img from '../../../public/image/demand/fv.webp';

const KeyVisual = () => {
  return (
    <Box
      sx={{
        py: 6,
        '@media screen and (max-width:460px)': {
          py: 5,
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          rowGap: 3,
          columnGap: 1,
          '@media screen and (max-width:460px)': {
            flexDirection: 'column',
            px: 2.5,
          },
          '& > img': {
            maxWidth: '414px',
            height: 'auto',
            '@media screen and (max-width:460px)': {
              display: 'none',
            }
          }
        }}
      >
        <Box sx={{
          '& > img': {
            display: 'none',
            '@media screen and (max-width:460px)': {
              display: 'block',
              maxWidth: '100%',
              height: 'auto',
              mt: 2,
              mx: 'auto',
              px: 2.5,
            }
          },
          '@media screen and (max-width:460px)': {
            textAlign: 'center',
            width: '100%',
          }
        }}>
          <Typography component="h2" sx={{
            fontSize: '50px',
            letterSpacing: '0.04em',
            lineHeight: '1.4',
            fontWeight: 'bold',
            '@media screen and (max-width:460px)': {
              fontSize: '34px',
            },
            '@media screen and (max-width:360px)': {
              fontSize: '29px'
            }
          }}>
            Web開発のご相談を<br/>お受けいたします
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 1,
            mt: 2,
            '@media screen and (max-width:460px)': {
              flexDirection: 'column',
              gap: 0,
              mt: 1,
            }
            }}>
            <Typography  sx={{
              fontSize: '16px',
              letterSpacing: '0.04em',
              lineHeight: '1.7',
              }}>
                窓口からエンジニアが担当
              </Typography>
              <Typography  sx={{
                fontSize: '16px',
                letterSpacing: '0.04em',
                lineHeight: '1.7',
                '&:before': {
                  content: '"/"',
                  mr: 1,
                  '@media screen and (max-width:460px)': {
                    content: 'none',
                  }
                }
              }}>
                小さなお困りごとでもOK
            </Typography>
          </Box>
          <img
            src={img.src}
            alt=""
            width="828"
            height="640"
          />
          <Box mt={4} sx={{
            width: '100%',
            '& > a': {
              '@media screen and (max-width:890px)': {
                width: '100%',
              }
            }
          }}>
            <CustomButton
              label="お問い合わせ"
              variant="primary"
              icon="arrow-right"
              href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
            />
          </Box>
        </Box>
        <img
          src={img.src}
          alt=""
          width="828"
          height="640"
        />
      </Box>
    </Box>
  )
}
export default KeyVisual;
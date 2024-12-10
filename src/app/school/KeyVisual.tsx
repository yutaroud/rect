"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import fvLarge from "../../../public/image/school/fv_large.png";
import fvSmall from "../../../public/image/school/fv_small.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const sxStyles = {
  photos: {
    display: 'flex',
    gap: 2,
    px: 2,
    justifyContent: 'center',
    marginTop: "40px",
    '& > img': {
      width: "200px",
      height: "auto",
      borderRadius: "10px",
      "&:nth-of-type(odd)": {
          marginBottom: "20px",
        },
      "&:nth-of-type(even)": {
        marginTop: "20px",
      },
    },
    "@media screen and (max-width:450px)": {
      justifyContent: 'flex-start',
      overflow: 'scroll',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      marginTop: 0,
      '& > img': {
        width: "150px",
        borderRadius: 0,
        "&:nth-of-type(odd)": {
            marginBottom: 0,
          },
        "&:nth-of-type(even)": {
          marginTop: 0,
        },
      }
    }
  },
  keyVisualLarge: {
    background: "#407BFF",
    '& > img': {
      verticalAlign: "bottom",
    },
    "@media screen and (max-width:450px)": {
      display: "none",
    }
  },
  keyVisualSmall: {
    display: "none",
    "@media screen and (max-width:450px)": {
      verticalAlign: "bottom",
      width: "100%",
      display: "inline-block",
      '& > img': {
        width: "100%",
        height: "auto",
      },
    }
  },
  text: {
    marginTop: "40px",
    "@media screen and (max-width:450px)": {
      paddingBottom: "48px",
      marginInline: "12px",
      marginTop: 0,
    }
  }
};

const images = [
  {
    src: '../../../image/school/image_exterior.webp',
    alt: '教室の外観',
  },
  {
    src: '../../../image/school/image_classroom.webp',
    alt: '教室の内観',
  },
  {
    src: '../../../image/school/image_teaching.webp',
    alt: '画面を指差しながら教えている様子',
  },
  {
    src: '../../../image/school/image_howToTeach.webp',
    alt: 'プログラミングをしている様子',
  },
];

const KeyVisual = () => {
  const isSmallScreen = useMediaQuery("(max-width:450px)");
  return (
    <>
      <Box sx={isSmallScreen ? sxStyles.keyVisualSmall : sxStyles.keyVisualLarge}>
        <img
          src={isSmallScreen ? fvSmall.src : fvLarge.src}
          alt="とにかく楽しんで、気づいたらプログラミングができるようになっている教室"
          width={isSmallScreen ? "375": "800"}
          height={isSmallScreen ? "517": "352"}
        />
      </Box>
      <Box sx={sxStyles.text}>
        <Typography variant="body2" mt={1}>
          <Typography component="span" variant="body2" fontWeight="bold">
            現役エンジニア
          </Typography>
          が低価格で教えます！
        </Typography>
        <Typography variant="body2" mt={1} style={{ lineHeight: "2" }}>
          個人の学びがより深まる
          {isSmallScreen && <br />}
          <Typography component="span" variant="body2" fontWeight="bold">
            少人数での教室
          </Typography>
          で{isSmallScreen && <br />}
          プログラミングを学びませんか？<br/>
          とにかく楽しく学ぶをモットーに{isSmallScreen && <br />}
          全力でお子様のサポートをいたします！
        </Typography>
      </Box>
      <Box sx={sxStyles.photos}>
        {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          width="300"
          height="200"
        />
      ))}
      </Box>
    </>
  );
};

export default KeyVisual;

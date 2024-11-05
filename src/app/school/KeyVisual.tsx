import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import fvImg from "../../../public/image/school/fv.png";

const sxStyles = {
  photos: {
    display: 'flex',
    gap: 2,
    overflow: 'scroll',
    overflowX: 'auto', 
    px: 2,
    justifyContent: 'flex-start',
    scrollSnapType: 'x mandatory',
  },
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
  return (
    <>
      <img
        src={fvImg.src}
        alt="とにかく楽しんで、気づいたらプログラミングができるようになっている教室"
        width="420"
        style={{ verticalAlign: "bottom", width: "100%" }}
      />
      <Box pb={6} mx={3}>
        <Typography variant="body2" mt={1}>
          <Typography component="span" variant="body2" fontWeight="bold">
            現役エンジニア
          </Typography>
          が低価格で教えます！
        </Typography>
        <Typography variant="body2" mt={1} style={{ lineHeight: "2" }}>
          個人の学びがより深まる
          <br />
          <Typography component="span" variant="body2" fontWeight="bold">
            少人数での教室
          </Typography>
          で<br />
          プログラミングを学びませんか？<br />
          とにかく楽しく学ぶをモットーに<br />
          全力でお子様のサポートをいたします！
        </Typography>
      </Box>
      <Box sx={sxStyles.photos}>
        {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          width="150"
          height="100"
        />
      ))}
      </Box>
    </>
  );
};

export default KeyVisual;

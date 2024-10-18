import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import fvImg from "../../../public/image/school/fv.png";

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
    </>
  );
};

export default KeyVisual;

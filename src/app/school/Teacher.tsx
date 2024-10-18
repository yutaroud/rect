import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headingTeacherImg from "../../../public/image/school/heading_teacher.png";
import iconImg from "../../../public/image/school/icon.png";

const Teacher = () => {
  return (
    <Box pt={6} pb={10} mx={3}>
      <Typography variant="h2">
        <img
          src={headingTeacherImg.src}
          alt="講師"
          width="58"
        />
      </Typography>
      <Box mt={3}>
        <img
          src={iconImg.src}
          width="420"
          style={{ width: "100%" }}
        />
      </Box>
      <Typography variant="h6" fontWeight="bold" align="left">
        渡辺 優樹
      </Typography>
      <Typography variant="body2" mt={2} align="left">
        プライム上場のエイチームグループにて<br />
        5年間Webエンジニアを経験し、5人のメンバーのマネジメントも経験しました。<br />
        プログラミングを通して、次の世代に残る何かを残したいと思い起業しました！
      </Typography>
      <Typography variant="body2" mt={2} align="left">
        とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！
      </Typography>
      <Typography variant="body2" fontWeight={"bold"} mt={2} align="left">
        経歴・資格について
      </Typography>
      <Typography variant="body2" mt={2} align="left">
        名古屋大学大学院情報学研究科 修了<br/>
        高等学校教諭一種免許状「情報」 免許保有<br/>
        基本情報技術者 資格保有
      </Typography>
    </Box>
  );
};

export default Teacher;

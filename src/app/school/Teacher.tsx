import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


const Teacher = () => {
  return (
    <Box pt={6} pb={10} mx={3}>
      <Typography variant="h2"><img src="../../image/school/heading_teacher.png" alt="講師" width="58" /></Typography>
      <Box mt={3}>
        <img src="../../image/school/icon.png" width="420" style={{width: '100%'}}/>
      </Box>
      <Typography variant="h6" fontWeight='bold' align="left">渡辺 優樹</Typography>
      <Typography variant="body2" mt={2} align="left">5年以上、一部上場企業にてWebエンジニアを経験。<br/>次の世代に残る何かを残したいと思い起業しました。</Typography>
      <Typography variant="body2" mt={2} align="left">とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</Typography>
    </Box>
  );
};

export default Teacher;
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headingTeacherImg from "../../../public/image/school/heading_introduction.png";

const sxStyles = {
  textWrap: {
    textAlign: 'left',
    px: 3,
    mt: -3,
  },
  pointWrap: {
    display: "flex",
    flexDirection: "column",
    '& + &': {
      mt: 5
    }
  },
  pointText: {
    background: '#24285B',
    px: 1,
    py: 0.5,
    fontWeight: 'bold',
    display: 'inline-block'
  },
};


const Introduction = () => {
  return (
    <Box pt={6} pb={10}>
      <Typography variant="h2" mx={3}>
        <img src={headingTeacherImg.src} alt="Re:ProSの特徴" width="300" />
      </Typography>
      <Box mt={5}>
        <Box sx={sxStyles.pointWrap}>
          <img src="../../../image/school/image_howToTeach.jpg" alt="PCで作業をしている様子" width="300" />
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography component="span" variant="subtitle1" sx={[sxStyles.pointText, {color: '#fff'}]}>
                ビジュアル/テキストプログラミング<Typography component="span" variant="body1" fontWeight={"bold"}>を</Typography>
              </Typography>
              <Typography component="span" variant="h6"  sx={[sxStyles.pointText, {color: '#FFF652'}]} mt={0.5}>一貫して学べる</Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              視覚的にプログラミングを学べる<br/>
              ビジュアルプログラミングから、<br/>
              実際のコードを書くテキストプログラミングまで<br/>
              一貫して学ぶことができる数少ないスクールです。<br/>
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.pointWrap}>
          <img src="../../../image/school/image_workSituation.jpg" alt="プログラミングを教えている様子" width="300" style={{marginLeft: 'auto'}}/>
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography component="span" variant="h6"  sx={[sxStyles.pointText, {color: '#FFF652'}]}>
                現役エンジニアが講師<Typography component="span" variant="body1" fontWeight={"bold"} color={'#fff'}>だから</Typography>
              </Typography>
              <Typography component="span" variant="subtitle1"  sx={[sxStyles.pointText, {color: '#fff'}]} mt={0.5}>
                現場での経験を基にした指導が特徴
              </Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              最新の業界動向や実践的なスキルを<br/>
              直接学ぶことができます。<br/>
              現場での経験を基にした実践的な指導が特徴です。
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.pointWrap}>
          <img src="../../../image/school/image_classroom.jpg" alt="プログラミング教室の様子" width="300" />
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography component="span" variant="h6" sx={[sxStyles.pointText, {color: '#fff'}]}>
                少人数の教室で<Typography component="span" variant="h6" color={'#FFF652'} fontWeight={'bold'}>低価格</Typography>
              </Typography>
              <Typography component="span" variant="subtitle1" sx={[sxStyles.pointText, {color: '#fff'}]} mt={0.5}>
                気軽に受講できる
              </Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              受講料は業界最安値レベルを維持。<br/>
              多くの方に手軽にプログラミングを学ぶ機会を<br/>
              提供しています。
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;

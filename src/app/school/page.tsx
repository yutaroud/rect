import "../globals.css";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const TitleLabel = ({ text }) => {
  return (
    <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5, display: 'inline-block', mt: 4}}>{text}</Typography>
  )
}

export const CtaButton = ({ text }) => {
  return (
    <Button variant="contained" size='large' sx={{fontSize: 20, fontWeight: 'bold', width: '100%', py: 2, borderRadius: 2, bgcolor: '#EF6C00', color: '#fff'}}>{text}</Button>
  )
}


const School = () => {
  return (
    <main>
      <Box
        width={375}
        component="section"
        mt={8}
        sx={{
          textAlign: "center",
          mx: 'auto',
          border: 'solid 1px #EEEEEE'
        }}
      >
        <img src="../../image/school/fv.png" width="375" style={{verticalAlign: 'bottom'}}/>
        <Box py={6} mx={3}>
          <Typography variant="body2" mt={1}><Typography component="span" variant="body2" fontWeight='bold'>現役エンジニア</Typography>が低価格で教えます！</Typography>
          <Typography variant="body2" mt={1}>個人の学びがより深まる</Typography>
          <Typography variant="body2" mt={1}><Typography component="span" variant="body2" fontWeight='bold'>少人数での教室</Typography>で</Typography>
          <Typography variant="body2" mt={1}>プログラミングを学びませんか？</Typography>
        </Box>
        <Box bgcolor='#407BFF' pt={7} pb={7} px={3}>
          <Box bgcolor='#fff' px={3} py={5} borderTop='solid 8px #263238' sx={{width: '100%', height: '400', backgroundSize: 16, backgroundPosition: '50% 50%', backgroundImage: 'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)'}}>
            <Typography variant="h2"><img src="../../image/school/heading_details.png" width="197" /></Typography>
            <TitleLabel text="授業内容"></TitleLabel>
            <Typography variant="body1" mt={2}>マイクラでのプログラミング学習</Typography>
            <Typography variant="body2" mt={1}>マインクラフトを通して、<br/>プログラミングに必要な考え方を学び<br/>創造力を育みます。</Typography>
            <TitleLabel text="対象"></TitleLabel>
            <Typography variant="body1" mt={2}>小学1年生〜小学6年生</Typography>
            <TitleLabel text="時間"></TitleLabel>
            <Typography variant="body1" mt={2}>1回60分 最大6人</Typography>
            <TitleLabel text="料金"></TitleLabel>
            <Typography variant="body1" mt={2}>6,500円 / 月4回</Typography>
            <TitleLabel text="日時"></TitleLabel>
            <Typography variant="body1" mt={2}>月〜金<br/>18:00〜20:00</Typography>
            <TitleLabel text="場所"></TitleLabel>
            <Typography variant="body1" mt={2}>〒441-0312<br/>愛知県豊川市御津町西方日暮50番地9</Typography>
          </Box>
        </Box>
        <Box pt={7} pb={7} mx={3}>
          <Typography variant="h2"><img src="../../image/school/heading_teacher.png" width="65" /></Typography>
          <Box mt={6}><img src="../../image/school/icon.png" width="303" /></Box>
          <Typography variant="h6" fontWeight='bold' mt={3} align="left">渡辺 優樹</Typography>
          <Typography variant="body2" mt={2} align="left">5年以上、一部上場企業にてWebエンジニアを経験。次の世代に残る何かを残したいと思い起業しました。</Typography>
          <Typography variant="body2" mt={2} align="left">とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</Typography>
        </Box>
        <Box pt={7} pb={7} px={3} bgcolor='#407BFF'>
          <Typography variant="h2"><img src="../../image/school/heading_cta.png" width="263" /></Typography>
          <Box mt={3}>
            <CtaButton text="無料体験を申し込む"></CtaButton>
            <Box mt={2}>
              <CtaButton text="入会する"></CtaButton>
            </Box>
          </Box>
          <Typography variant="body2" mt={5} color='#fff' fontWeight='bold'>その他、お問合せやご相談は<br/>お電話ください</Typography>
          <Box mt={2}>
            <CtaButton text="080-3945-1221"></CtaButton>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default School;

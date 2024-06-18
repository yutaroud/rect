import "../globals.css";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LocalPhone, KeyboardArrowRight } from '@mui/icons-material';

export const TitleLabel = ({ text }) => {
  return (
    <Typography variant="h3" sx={{borderRadius: 50, bgcolor: '#24285B', color: '#fff', fontSize: 16, fontWeight: 'bold', pt: 1, pb: 0.5, px: 5, display: 'inline-block', mt: 4}}>{text}</Typography>
  )
}


const School = () => {
  return (
    <main>
      <Box
        component="section"
        mt={8}
        sx={{
          textAlign: "center",
          mx: 'auto',
          border: 'solid 1px #EEEEEE',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <img src="../../image/school/fv.png" alt="とにかく楽しんで、気づいたらプログラミングができるようになっている教室" width="420" style={{verticalAlign: 'bottom', width: '100%'}} />
        <Box pb={6} mx={3}>
          <Typography variant="body2" mt={1}><Typography component="span" variant="body2" fontWeight='bold'>現役エンジニア</Typography>が低価格で教えます！</Typography>
          <Typography variant="body2" mt={1} style={{lineHeight: '2'}}>個人の学びがより深まる<br/><Typography component="span" variant="body2" fontWeight='bold'>少人数での教室</Typography>で<br/>プログラミングを学びませんか？</Typography>
        </Box>
        <Box bgcolor='#407BFF' py={10} px={3}>
          <Box bgcolor='#fff' px={3} py={5} borderTop='solid 8px #24285B' sx={{width: '100%', height: '400', backgroundSize: 16, backgroundPosition: '50% 50%', backgroundImage: 'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)'}}>
            <Typography variant="h2"><img src="../../image/school/heading_details.png" alt="スクール概要" width="177" /></Typography>
            <TitleLabel text="授業内容"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>マイクラでのプログラミング学習</Typography>
            <Typography variant="caption" mt={1} component="p">マインクラフトを通して、<br/>プログラミングに必要な考え方を学び<br/>創造力を育みます。</Typography>
            <TitleLabel text="対象"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>小学1年生〜小学6年生</Typography>
            <TitleLabel text="時間"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>1回60分 最大6人</Typography>
            <TitleLabel text="料金"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>6,500円 / 月4回</Typography>
            <TitleLabel text="日時"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>月〜金<br/>18:00〜20:00</Typography>
            <TitleLabel text="場所"></TitleLabel>
            <Typography variant="body1" fontWeight='bold' mt={2}>〒441-0312<br/>愛知県豊川市御津町西方日暮50番地9</Typography>
            <Box mt={2}>
              <iframe
              width="600"
              height="200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{width: '100%', border: '0' }}
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=愛知県豊川市御津町西方日暮50-9`}
            />
            </Box>
          </Box>
        </Box>
        <Box pt={6} pb={10} mx={3}>
          <Typography variant="h2"><img src="../../image/school/heading_teacher.png" alt="講師" width="58" /></Typography>
          <Box mt={3}>
            <img src="../../image/school/icon.png" width="420" style={{width: '100%'}}/>
          </Box>
          <Typography variant="h6" fontWeight='bold' align="left">渡辺 優樹</Typography>
          <Typography variant="body2" mt={2} align="left">5年以上、一部上場企業にてWebエンジニアを経験。<br/>次の世代に残る何かを残したいと思い起業しました。</Typography>
          <Typography variant="body2" mt={2} align="left">とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</Typography>
        </Box>
        <Box pt={7} pb={7} px={3} bgcolor='#407BFF'>
          <Typography variant="h2"><img src="../../image/school/heading_cta.png" alt="お気軽にお問合せください" width="236" /></Typography>
          <Box mt={3}>
            <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff'}} endIcon={<KeyboardArrowRight/>}>無料体験を申し込む</Button>
            <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} endIcon={<KeyboardArrowRight/>}>入会する</Button>
          </Box>
          <Typography variant="body2" mt={5} color='#fff' fontWeight='bold'>その他、お問合せやご相談は<br/>お電話ください</Typography>
          <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} startIcon={<LocalPhone/>} href="tel:080-3945-1221">080-3945-1221</Button>
        </Box>
      </Box>
    </main>
  );
};

export default School;

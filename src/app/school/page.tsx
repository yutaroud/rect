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
        <img src="../../image/school/fv.png" width="420" style={{verticalAlign: 'bottom', width: '100%'}} />
        <Box pb={6} mx={3}>
          <Typography variant="body2" mt={1}><Typography component="span" variant="body2" fontWeight='bold'>現役エンジニア</Typography>が低価格で教えます！</Typography>
          <Typography variant="body2" mt={1}>個人の学びがより深まる</Typography>
          <Typography variant="body2" mt={1}><Typography component="span" variant="body2" fontWeight='bold'>少人数での教室</Typography>で</Typography>
          <Typography variant="body2" mt={1}>プログラミングを学びませんか？</Typography>
        </Box>
        <Box bgcolor='#407BFF' py={10} px={3}>
          <Box bgcolor='#fff' px={3} py={5} borderTop='solid 8px #24285B' sx={{width: '100%', height: '400', backgroundSize: 16, backgroundPosition: '50% 50%', backgroundImage: 'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)'}}>
            <Typography variant="h2"><img src="../../image/school/heading_details.png" width="177" /></Typography>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.605214250749!2d137.31217241168676!3d34.815872876910674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004c8c97bc8f76f%3A0xcd05623c79fb8ea7!2z44CSNDQxLTAzMTIg5oSb55-l55yM6LGK5bed5biC5b6h5rSl55S66KW_5pa55pel5pqu77yV77yQ4oiS77yZ!5e0!3m2!1sja!2sjp!4v1718541764963!5m2!1sja!2sjp" width="600" height="200" style={{width: '100%', border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Box>
        </Box>
        <Box pt={6} pb={10}>
          <Typography variant="h2"><img src="../../image/school/heading_teacher.png" width="58" /></Typography>
          <img src="../../image/school/icon.png" width="420" style={{width: '100%'}}/>
          <Box mx={3}>
            <Typography variant="h6" fontWeight='bold' align="left">渡辺 優樹</Typography>
            <Typography variant="body2" mt={2} align="left">5年以上、一部上場企業にてWebエンジニアを経験。次の世代に残る何かを残したいと思い起業しました。</Typography>
            <Typography variant="body2" mt={2} align="left">とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</Typography>
          </Box>
        </Box>
        <Box pt={7} pb={7} px={3} bgcolor='#407BFF'>
          <Typography variant="h2"><img src="../../image/school/heading_cta.png" width="236" /></Typography>
          <Box mt={3}>
            <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff'}} endIcon={<KeyboardArrowRight/>}>無料体験を申し込む</Button>
            <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} endIcon={<KeyboardArrowRight/>}>入会する</Button>
          </Box>
          <Typography variant="body2" mt={5} color='#fff' fontWeight='bold'>その他、お問合せやご相談は<br/>お電話ください</Typography>
          <Button variant="contained" size='large' fullWidth={true} sx={{fontSize: 20, fontWeight: 'bold', py: 2, borderRadius: 4, bgcolor: '#EF6C00', color: '#fff', marginTop: 2}} startIcon={<LocalPhone/>}>080-3945-1221</Button>
        </Box>
      </Box>
    </main>
  );
};

export default School;

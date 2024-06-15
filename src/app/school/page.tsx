import "../globals.css";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const School = () => {
  return (
    <main>
      <Box
        width={375}
        component="section"
        mt={7}
        sx={{
          textAlign: "center",
          mx: 'auto',
          border: 'solid 1px #EEEEEE'
        }}
        position="relative"
      >
        <Typography variant="h1"><img src="../../image/school/fv.png" width="375"/></Typography>
        <Box py={6} mx={3}>
          <Typography variant="body2" mt={1}>現役エンジニアが低価格で教えます！</Typography>
          <Typography variant="body2" mt={1}>個人の学びがより深まる</Typography>
          <Typography variant="body2" mt={1}>少人数での教室で</Typography>
          <Typography variant="body2" mt={1}>プログラミングを学びませんか？</Typography>
        </Box>
        <Box pt={7} pb={7} mx={3}>
          <Typography variant="h2"><img src="../../image/school/heading_details.png" width="197" /></Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>授業内容</Typography>
          <Typography variant="body1" mt={2}>マイクラでのプログラミング学習</Typography>
          <Typography variant="body2" mt={1}>マインクラフトを通して、プログラミングに必要な考え方を学び創造力を育みます。</Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>対象</Typography>
          <Typography variant="body2" mt={2}>小学1年生〜小学6年生</Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>時間</Typography>
          <Typography variant="body2" mt={2}>1回60分 最大6人</Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>料金</Typography>
          <Typography variant="body2" mt={2}>6,500円 / 月4回</Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>日時</Typography>
          <Typography variant="body2" mt={2}>月〜金18:00〜20:00</Typography>
          <Typography variant="h3" sx={{borderRadius: 50,bgcolor: '#333',color: '#fff',fontSize: 16, fontWeight: 'bold', pt: 0.5,pb: 0.25,px: 5,display: 'inline-block', mt: 4}}>場所</Typography>
          <Typography variant="body2" mt={2}>〒441-0312<br/>愛知県豊川市御津町西方日暮50番地9</Typography>
        </Box>
        <Box pt={7} pb={7} mx={3}>
          <Typography variant="h2"><img src="../../image/school/heading_teacher.png" width="65" /></Typography>
          <Box mt={6}><img src="../../image/school/icon.png" width="303" /></Box>
          <Typography variant="h6" sx={{fontWeight: 'bold'}} mt={3} align="left">渡辺 優樹</Typography>
          <Typography variant="body2" mt={2} align="left">5年以上、一部上場企業にてWebエンジニアを経験。次の世代に残る何かを残したいと思い起業しました。</Typography>
          <Typography variant="body2" mt={2} align="left">とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</Typography>
        </Box>
        <Box pt={7} pb={7} mx={3}>
          <Typography variant="h2"><img src="../../image/school/heading_cta.png" width="263" /></Typography>
          <Button variant="contained" size='large' sx={{fontSize: 20, fontWeight: 'bold', width: '100%', marginTop: 3, py: 2, borderRadius: 2}}>無料体験を申し込む</Button>
          <Button variant="contained" size='large' sx={{fontSize: 20, fontWeight: 'bold', width: '100%', marginTop: 2, py: 2, borderRadius: 2}}>入会する</Button>
          <Typography variant="body2" mt={3}>その他、お問合せやご相談は<br/>お電話ください</Typography>
          <Button variant="contained" size='large' sx={{fontSize: 20, fontWeight: 'bold', width: '100%', marginTop: 2, py: 2, borderRadius: 2}}>080-3945-1221</Button>
        </Box>
      </Box>
    </main>
  );
};

export default School;

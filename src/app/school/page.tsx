import "../globals.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const School = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: "center",
        }}
        position="relative"
      >
        <Container sx={{ mt: 8 }}>
          <h1>とにかく楽しんで、気づいたらプログラミングができるようになっている教室</h1>
          <section>
            <p>現役エンジニアが低価格で教えます！</p>
            <p>個人の学びがより深まる</p>
            <p>少人数での教室で</p>
            <p>プログラミングを学びませんか？</p>
          </section>
          <section>
            <h2>スクール概要</h2>
            <h3>授業内容</h3>
            <h4>マイクラでのプログラミング学習</h4>
            <p>マインクラフトを通して、プログラミングに必要な考え方を学び創造力を育みます。</p>
            <h3>対象</h3>
            <p>小学1年生〜小学6年生</p>
            <h3>時間</h3>
            <p>1回60分 最大6人</p>
            <h3>料金</h3>
            <p>6,500円 / 月4回</p>
            <h3>日時</h3>
            <p>月〜金18:00〜20:00<br/></p>
            <h3>場所</h3>
            <p>〒441-0312<br/>愛知県豊川市御津町西方日暮50番地9</p>
          </section>
          <section>
            <h2>講師</h2>
            <p>渡辺 優樹</p>
            <p>5年以上、一部上場企業にてWebエンジニアを経験。次の世代に残る何かを残したいと思い起業しました。</p>
            <p>とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！</p>
          </section>
          <section>
            <h2>お気軽にお問合せください</h2>
            <button>無料体験を申し込む</button>
            <button>入会する</button>
            <p>その他、お問合せやご相談は<br/>
            お電話ください</p>
            <button>080-3945-1221</button>
          </section>
        </Container>
      </Box>
    </main>
  );
};

export default School;

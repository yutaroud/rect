import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TitleLabel = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        borderRadius: 50,
        bgcolor: "#24285B",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        pt: 1,
        pb: 0.5,
        px: 5,
        display: "inline-block",
        mt: 4,
      }}
    >
      {text}
    </Typography>
  );
};

const Curriculum = () => {
  return (
    <Box bgcolor="#407BFF" py={10} px={3}>
      <Box
        bgcolor="#fff"
        px={3}
        py={5}
        borderTop="solid 8px #24285B"
        sx={{
          width: "100%",
          height: "400",
          backgroundSize: 16,
          backgroundPosition: "50% 50%",
          backgroundImage:
            "repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)",
        }}
      >
        <Typography variant="h2">
          <img
            src="../../image/school/heading_details.png"
            alt="スクール概要"
            width="177"
          />
        </Typography>
        <TitleLabel text="授業内容"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          Scratchでのプログラミング学習
          <br />
          JavaScriptでのWeb開発
        </Typography>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          初級コース
        </Typography>
        <Typography variant="caption" mt={1} component="p">
          ビジュアルプログラミング言語「Scratch」を用いて
          <br />
          プログラミングの基礎概念を学びます。キーボード入力に
          <br />
          慣れていなくても安心して学習することができます。
        </Typography>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          中級コース
        </Typography>
        <Typography variant="caption" mt={1} component="p">
          テキストプログラミング言語「JavaScript」を用いた
          <br />
          Webサイト開発を通してプログラミングを学びます。
          <br />
          主に、キーボードを使用する本格的なプログラミングコースです。
        </Typography>
        <TitleLabel text="対象"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          小学4年生〜高校3年生
        </Typography>
        <TitleLabel text="時間"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          1回60分 最大6人
        </Typography>
        <TitleLabel text="受講料"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          6,500〜12,000円{" "}
          <Typography variant="caption" mt={1} component="span">
            ※
          </Typography>{" "}
          / 月4回
        </Typography>
        <Typography variant="caption" mt={1} component="p">
          ※コースに応じて変動。 <br />
          入会時に入会金10,000円、受講料とは別に教材費が毎月500円かかります。
        </Typography>
        <TitleLabel text="日時"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          月〜金
          <br />
          17:00〜18:00,18:30〜19:30,20:00 ~ 21:00
        </Typography>
        <TitleLabel text="場所"></TitleLabel>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          〒441-0312
          <br />
          愛知県豊川市御津町西方日暮50番地9
        </Typography>
        <Box mt={2}>
          <iframe
            width="600"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", border: "0" }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=愛知県豊川市御津町西方日暮50-9`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculum;

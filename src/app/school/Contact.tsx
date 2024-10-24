"use client";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LocalPhone, KeyboardArrowRight } from "@mui/icons-material";
import headingCtaImg from "../../../public/image/school/heading_cta.png";
import instagramImg from "../../../public/image/school/instagram_icon.png";

const Contact = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/school/complete");
  };

  return (
    <Box pt={7} pb={7} px={3} bgcolor="#407BFF" id="contact-form">
      <Typography variant="h2">
        <img
          src={headingCtaImg.src}
          alt="お気軽にお問合せください"
          width="236"
        />
      </Typography>
      <Box mt={3}>
        <Typography variant="body2" mb={2} color="#fff" fontWeight="bold">
          下記フォームよりメールアドレスをご登録ください。
          <br />
          ご登録後、メールにてご連絡いたしますので、必要事項をご記入お願いいたします。
          <br />
        </Typography>
        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          sx={[
            {
              fontSize: 20,
              fontWeight: "bold",
              py: 2,
              borderRadius: 4,
              bgcolor: "#EF6C00",
              color: "#fff",
            },
            { "&:hover": { backgroundColor: "#D46000" } },
          ]}
          endIcon={<KeyboardArrowRight />}
          onClick={handleClick}
          data-ga="freeTrial"
        >
          無料体験を申し込む
        </Button>
        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          sx={[
            {
              fontSize: 20,
              fontWeight: "bold",
              py: 2,
              borderRadius: 4,
              bgcolor: "#EF6C00",
              color: "#fff",
              marginTop: 2,
            },
            { "&:hover": { backgroundColor: "#D46000" } },
          ]}
          endIcon={<KeyboardArrowRight />}
          href="https://www.kaihipay.jp/forms?form_code=6841800233981658"
          data-ga="purchase"
        >
          入会する
        </Button>
      </Box>
      <Typography variant="body2" mt={5} color="#fff" fontWeight="bold">
        その他、お問合せやご相談は
        <br />
        お電話または公式LINEアカウントへご連絡ください
      </Typography>
      <Button
        variant="contained"
        size="large"
        fullWidth={true}
        sx={[
          {
            fontSize: 20,
            fontWeight: "bold",
            py: 2,
            borderRadius: 4,
            bgcolor: "#EF6C00",
            color: "#fff",
            marginTop: 2,
          },
          { "&:hover": { backgroundColor: "#D46000" } },
        ]}
        startIcon={<LocalPhone />}
        href="tel:090-1831-1182"
      >
        090-1831-1182
      </Button>
      <Button
        sx={[
          {
            marginTop: 2,
          },
        ]}
        size="medium"
        href="https://lin.ee/lIcNsMA"
      >
        <img
          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
          alt="友だち追加"
          height="36"
        />
      </Button>
      <Button
        sx={[
          {
            marginTop: 2,
          },
        ]}
        size="medium"
        href="https://www.instagram.com/repros_programming/"
      >
        <img src={instagramImg.src} alt="instagramのリンク" height="36" />
      </Button>
      <Typography variant="body2" mt={2} color="#fff" fontWeight="bold">
        下記資料から詳細内容についてご確認いただけます。
      </Typography>
      <iframe
        style={{
          marginTop: "10px"
        }}
        src="https://speakerdeck.com/player/0daa6cfb0d2543f6a30d706c68886a76"
        title="Re:proS_案内資料"
        allowFullScreen={true}
        data-ratio="1.7777777777777777"
        width="100%"
        height="300px"
        loading="lazy"
      ></iframe>
      <Typography variant="body2" fontSize={11} mt={2} color="#fff">
        ※注意事項<br/>
        初級「マイクラ」コースは、Minecraftの公式商品ではございません。<br/>
        また、Mojang社は本コースの内容と関わりはございません。<br/>
        予めご了承ください。<br/>
        Our course is not official Minecraft® products. <br/>
        Our course is not approved by, or associated with Mojang®.
      </Typography>
    </Box>
  );
};

export default Contact;

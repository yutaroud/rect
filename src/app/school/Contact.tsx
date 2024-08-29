import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LocalPhone, KeyboardArrowRight } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box pt={7} pb={7} px={3} bgcolor="#407BFF" id="contact-form">
      <Typography variant="h2">
        <img
          src="../../image/school/heading_cta.png"
          alt="お気軽にお問合せください"
          width="236"
        />
      </Typography>
      <Box mt={3}>
        <Typography
          variant="body2"
          mb={2}
          color="#fff"
          fontWeight="bold"
        >
          下記フォームよりメールアドレスをご登録ください。<br />
          ご登録後、メールにてご連絡いたしますので、必要事項をご記入お願いいたします。<br />
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
          href="https://www.kaihipay.jp/forms?form_code=2290891890827256"
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
        お電話ください
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
    </Box>
  );
};

export default Contact;

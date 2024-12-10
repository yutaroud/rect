"use client";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LocalPhone, KeyboardArrowRight } from "@mui/icons-material";
import headingCtaImg from "../../../public/image/school/heading_cta.png";
import headingInformationImg from "../../../public/image/school/heading_information.png";
import headingInstagramImg from "../../../public/image/school/heading_instagram.png";
import instagramImg from "../../../public/image/school/instagram_icon.png";
import line from "../../../public/image/school/icon_line.png";
import useMediaQuery from '@mui/material/useMediaQuery';

const sxStyles = {
  heading: {
    marginInline: "24px",
    '& > img': {
      width: "327px",
      height: "auto",
    },
    "@media screen and (max-width:450px)": {
      '& > img': {
        width: "236px",
      }
    }
  },
  headingInformation: {
    marginInline: "24px",
    '& > img': {
      width: "163px",
      height: "auto",
    },
    "@media screen and (max-width:450px)": {
      '& > img': {
        width: "131px",
      }
    }
  },
  headingInstagram: {
    marginInline: "24px",
    mt: 8,
    '& > img': {
      width: "267px",
      height: "auto",
    },
    "@media screen and (max-width:450px)": {
      '& > img': {
        width: "215px",
      }
    }
  },
  buttons: {
    display: "flex",
    width: "800px",
    mx: "auto",
    alignItems: "center",
    gap: 2,
    mt: 3,
    "@media screen and (max-width:450px)": {
      display: "block",
      width: "100%",
    }
  },
  accentButton: {
    fontSize: 20,
    fontWeight: "bold",
    py: 2,
    borderRadius: 60,
    bgcolor: "#EF6C00",
    color: "#fff",
    width: "100%",
    "&:hover": {
      backgroundColor: "#D46000"
    },
    "@media screen and (max-width:450px)": {
      "& + &": {
        mt: 2
     },
    }
  },
  defaultButton: {
    fontSize: 20,
    fontWeight: "bold",
    py: 2,
    borderRadius: 60,
    bgcolor: "rgba(0,0,0,0.04)",
    color: "#fff",
    border: "solid 1px #fff",
    width: "100%",
    "@media screen and (max-width:450px)": {
      "& + &": {
        mt: 2,
     },
    },
    "&:hover": {
      bgcolor: "rgba(0,0,0,0.1)",
    },
  },
  subButton: {
    fontSize: 18,
    fontWeight: "bold",
    py: 2,
    borderRadius: 60,
    color: "#333",
    border: "solid 1px #333",
    width: "400px",
    mt: 4,
    background: "#fff",
    "&:hover": {
      bgcolor: "rgba(0,0,0,0.1)",
    },
    "@media screen and (max-width:450px)": {
      width: "100%",
    }
  },
  information: {
    mx: "auto",
    my: 9,
    width: "800px",
    "@media screen and (max-width:450px)": {
      width: "100%",
      px: 3,
    },
  }
};

const Contact = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/school/complete");
  };
  const isSmallScreen = useMediaQuery("(max-width:450px)");
  return (
    <>
      <Box pt={7} pb={7} px={3} bgcolor="#407BFF" id="contact-form">
        <Typography variant="h2" sx={sxStyles.heading}>
          <img
            src={headingCtaImg.src}
            alt="お気軽にお問合せください"
            width="511"
            height="146"
          />
        </Typography>
        <Box mt={3}>
          <Typography variant="body2" color="#fff" fontWeight="bold">
            下記フォームより{isSmallScreen && <br />}メールアドレスをご登録ください。
          </Typography>
          <Typography variant="body2" color="#fff" fontWeight="bold" mt={1}>
            ご登録後、メールにてご連絡いたしますので{isSmallScreen && <br />}必要事項をご記入お願いいたします。
          </Typography>
          <Box sx={sxStyles.buttons}>
            <Button
              variant="contained"
              size="large"
              fullWidth={true}
              sx={sxStyles.accentButton}
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
              sx={sxStyles.accentButton}
              endIcon={<KeyboardArrowRight />}
              href="https://www.kaihipay.jp/forms?form_code=6841800233981658"
              data-ga="purchase"
            >
              入会する
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" mt={5} color="#fff" fontWeight="bold">
          その他、お問合せやご相談は
          <br />
          お電話または公式LINEアカウントへ{isSmallScreen && <br />}ご連絡ください。
        </Typography>
        <Box sx={sxStyles.buttons}>
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            sx={sxStyles.defaultButton}
            startIcon={<LocalPhone />}
            href="tel:090-1831-1182"
          >
            090-1831-1182
          </Button>
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            sx={sxStyles.defaultButton}
            href="https://lin.ee/lIcNsMA"
          >
            <img
              src={line.src}
              alt="LINE"
              width="24"
              height="24"
              style={{marginRight: "16px"}}
            />
            LINEアカウント
          </Button>
        </Box>
      </Box>
      <Box sx={sxStyles.information}>
        <Typography variant="h2" sx={sxStyles.headingInformation}>
          <img
            src={headingInformationImg.src}
            alt="案内資料"
            width="32"
            height="78"
          />
        </Typography>
        <Typography variant="body2" mt={2} color="#333" fontWeight="bold">
          下記資料から詳細内容について{isSmallScreen && <br />}ご確認いただけます。
        </Typography>
        <iframe
          style={{
            marginTop: "20px",
            maxWidth: "100%",
            height: "auto",
            aspectRatio: "1.7777777",
          }}
          src="https://speakerdeck.com/player/0daa6cfb0d2543f6a30d706c68886a76"
          title="Re:proS_案内資料"
          allowFullScreen={true}
          data-ratio="1.7777777777777777"
          width="650px"
          loading="lazy"
        ></iframe>
        <Typography variant="h2" sx={sxStyles.headingInstagram}>
          <img
            src={headingInstagramImg.src}
            alt="公式Instagram"
            width="528"
            height="84"
          />
        </Typography>
        <Button
          sx={sxStyles.subButton}
          variant="contained"
          size="large"
          fullWidth={true}
          href="https://www.instagram.com/repros_programming/"
        >
          <img
            src={instagramImg.src}
            alt="instagramのリンク"
            width="24"
            height="24"
            style={{marginRight: "8px"}} />
            @repros_programming
        </Button>
      </Box>
    </>
  );
};

export default Contact;

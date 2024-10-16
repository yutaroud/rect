import "../globals.css";
import Header from "../Header";
import Box from "@mui/material/Box";
import KeyVisual from "./KeyVisual";
import Curriculum from "./Curriculum";
import Teacher from "./Teacher";
import Contact from "./Contact";

export const metadata = {
  title: "プログラミングを学ぶならRe:ProS(レプロス)",
  description: "小学4年生~高校3年生までを対象とした豊川市のプログラミングスクール。現役エンジニアが低価格で教えます。",
  robots: "index,follow",
  alternates: {
    canonical: "https://re-ct.co.jp/school/"
  }
};

const School = () => {
  return (
    <main>
      <Header switchLogo={true} />
      <Box
        component="section"
        mt={7}
        sx={{
          textAlign: "center",
          mx: "auto",
          border: "solid 1px #EEEEEE",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <KeyVisual />
        <Curriculum />
        <Teacher />
        <Contact />
      </Box>
    </main>
  );
};

export default School;

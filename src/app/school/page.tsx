import "../globals.css";
import Header from "../Header";
import Box from "@mui/material/Box";
import KeyVisual from "./KeyVisual";
import Curriculum from "./Curriculum";
import Teacher from "./Teacher";
import Contact from "./Contact";

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

import "../globals.css";
import Box from "@mui/material/Box";
import KeyVisual from "./KeyVisual"
import Curriculum from "./Curriculum"
import Teacher from "./Teacher"
import Contact from "./Contact"


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
        <KeyVisual/>
        <Curriculum/>
        <Teacher/>
        <Contact/>
      </Box>
    </main>
  );
};

export default School;

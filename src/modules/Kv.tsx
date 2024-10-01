import Box from "@mui/material/Box";
import Image from "next/image";
import Fade from '@mui/material/Fade';

const Kv = () => {
  return (
    <>
    <Box
      mt={8}
      sx={{
        textAlign: "center",
        "@media screen and (max-width:800px)": {
          display: "none"
        },
      }}
    >
      <Fade in={true} timeout={1000}>
        <Image
            alt="fv"
            src="../../image/top/kv_pc.png"
            width={1233}
            height={571}
          />
      </Fade>
    </Box>
    <Box
      mt={8}
      sx={{
        display: "none",
        "@media screen and (max-width:800px)": {
          display: "block"
        },
      }}
    >
      <Fade in={true} timeout={1000}>
        <Image
          alt="fv"
          src="../../image/top/kv_sp.png"
          width={750}
          height={796}
          style={{width: "100%",height: "auto",verticalAlign: "bottom"}}
        />
      </Fade>
    </Box>
    </>
  );
};

export default Kv;

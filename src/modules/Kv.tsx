import Box from "@mui/material/Box";
import Image from "next/image";
import Fade from '@mui/material/Fade';

const Kv = () => {
  return (
    <Box
      mt={8}
      sx={{
        textAlign: "center",
        "@media screen and (max-width:800px)": {
          padding: "96px 16px",
          height: "auto",
        },
      }}
    >
      <Fade in={true} timeout={1000}>
      <Image
          alt="fv"
          src="../../image/top/fv.png"
          width={1233}
          height={571}
        />
        </Fade>
    </Box>
  );
};

export default Kv;

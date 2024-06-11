import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MediaCard from "../components/MediaCard";
import Grid from "@mui/material/Grid";

const Business = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
      }}
    >
      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography variant="h4" align="center">
          事業内容
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <MediaCard heading="プログラミング教室" text="小学生向けのスクール" href="/school" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCard heading="フリーランス" text="どんな案件でもまずはご相談ください！" href="#" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Business;

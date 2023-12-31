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
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h4" align="center">
          事業内容
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <MediaCard heading="プログラミング" text="募集" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCard heading="フリーランス" text="募集" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCard heading="サービスA" text="募集" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Business;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Contact = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
      }}
    >
      <Container sx={{ mt: 5, mb: 10 }}>
        <Button
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5,
          }}
        >
          <Typography variant="h4" component="span">
            <Link
              href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
              rel="noopener noreferrer"
              target="_blank"
            >
              お問い合わせはこちらから
            </Link>
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;

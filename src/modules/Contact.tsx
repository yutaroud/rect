import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Contact = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
        padding: "150px 16px 0 16px",
      }}
    >
      <Typography variant="h2" sx={{fontWeight: "bold", letterSpacing: "5px", fontSize: "40px"}}>
        お問い合わせ
      </Typography>
      <Typography variant="caption" align="center" component="span" sx={{fontSize: "17px", fontWeight: "bold", letterSpacing: "3px", color: "#C2C2C2"}}>
        Contact
      </Typography>
      <Box mt={4}>
        <Link
          href="https://forms.gle/tWbY3pJaxRpEq7Nz8"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            borderRadius: "50px",
            height: "auto",
            py: 3,
            px: 8,
            backgroundColor: "#00298A",
            color: "#fff",
            fontSize: "20px",
            textDecoration: "none",
            fontWeight: "bold",
            letterSpacing: "1px",
            display: "inline-block"
          }}
        >
          お問い合わせフォームへ
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;

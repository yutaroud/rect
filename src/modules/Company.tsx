import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (title: string, description: string) => {
  return { title, description };
};

const rows = [
  createData("屋号", "RE:CT"),
  createData("設立", "2024年6月3日"),
  createData("所在地", "愛知県豊川市御津町西方日暮1-12"),
  createData("代表", "渡辺優樹"),
  createData("主な事業内容", "情報通信サービスの開発・運営"),
];

const Company = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
      }}
      position="relative"
    >
      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography variant="h4" align="center">
          会社概要
        </Typography>
        <TableContainer component={Paper}>
          <Table size="medium">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.title}>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "1.5rem" }}>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Company;

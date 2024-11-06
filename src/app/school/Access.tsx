import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headingCtaImg from "../../../public/image/school/heading_access.png";

const List = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      py: 3,
      px: 2,
      gap: 2,
      mx: 1,
      borderBottom: "1px solid #E0E0E0",
      '&:last-child': {
        borderBottom: "none"
      }
      }}>
      <dt>
        <Typography width={70} textAlign={"left"}>{title}</Typography>
      </dt>
      <dd>
        {children}
      </dd>
    </Box>
  )
}

const Access = () => {
  return (
    <Box pt={7} pb={7} px={3} bgcolor="#F5F5F5">
      <Typography variant="h2">
        <img
          src={headingCtaImg.src}
          alt="アクセス"
          width="123"
        />
      </Typography>
      <Box mt={6}>
        <iframe
          width="600"
          height="200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", border: "0" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=愛知県豊川市御津町西方日暮50-9`}
        />
      </Box>
      <dl>
        <Box mt={4} bgcolor="#fff" borderRadius={3}>
          <List title="住所">
            <Typography variant="body2" textAlign={"left"}>
              〒441-0312<br/>愛知県豊川市御津町西方日暮50番地9
            </Typography>
          </List>
          <List title="駐車場">
            <Typography variant="body2" textAlign={"left"}>
              6台 スペースあり
            </Typography>
          </List>
          <List title="周辺施設">
            <Typography variant="body2" textAlign={"left"}>
            御津中学校 徒歩1分<br/>愛知御津駅 徒歩5分
            </Typography>
            <Typography variant="body2" textAlign={"left"} mt={1}>
              スーパー/コンビニ/ドラッグストアあり
            </Typography>
          </List>
        </Box>
      </dl>
    </Box>
  );
};

export default Access;

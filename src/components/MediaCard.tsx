import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function MediaCard({
  heading,
  text,
  href,
  imgSrc,
  imgAlt,
}: {
  heading: string;
  text: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <Link href={href}>
      <Card
        style={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          background: "none",
          borderRadius: "12px"
        }}
      >
        <Image
          alt={imgAlt}
          src={imgSrc}
          width={600}
          height={400}
          style={{
            maxWidth: "100%",
            aspectRatio: 3 / 2,
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <CardContent
          style={{
            padding: "24px 16px",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
        <Box>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "1px",
              textAlign: "left",
              color: "#E9EFFF",
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body2"
            color="#7994D5"
            style={{
              fontSize: "14px",
              letterSpacing: "0.5px",
              textAlign: "left",
              marginTop: "12px",
            }}
          >
            {text}
          </Typography>
          </Box>
          <Image
            alt={imgAlt}
            src="../../image/top/icon_arrow_circle.png"
            width={40}
            height={40}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </CardContent>
      </Card>
    </Link>
  );
}

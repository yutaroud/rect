import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        <CardContent style={{ padding: "0", marginTop: "24px" }}>
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
          <Typography
            variant="body2"
            style={{
              color: "#fff",
              marginTop: "20px",
              display: "inline-block",
              borderBottom: "1px solid #fff",
              padding: "0 4px 4px",
              fontSize: "15px",
            }}
          >
            詳細へ
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

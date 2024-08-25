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
      <Card style={{boxShadow: "none", display: "flex", flexDirection: "column"}}>
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
        <CardContent style={{padding: "0", marginTop: "16px",}}>
          <Typography gutterBottom variant="h3" component="h3" style={{fontSize: "22px", fontWeight:"bold", letterSpacing: "1px", textAlign: "left"}}>
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: "14px", letterSpacing: "0.5px", textAlign: "left", marginTop: "8px"}}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

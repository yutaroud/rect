import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ heading, text, href, imgSrc, imgAlt }: { heading: string; text: string, href: string, imgSrc: string, imgAlt: string }) {
  return (
    <Card>
      <Image
        alt={imgAlt}
        src={imgSrc}
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={href}>詳細</Link>
      </CardActions>
    </Card>
  );
}
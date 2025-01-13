import '../globals.css';
import Container from '@mui/material/Container';
import { Typography, Box } from '@mui/material';
import Policy from './Policy';

const Privacy = () => {
  return (
    <main>
      <Box component="section" position="relative">
        <Container sx={{ mt: 4 }}>
          <Typography variant="h1" fontSize={24} fontWeight={700} gutterBottom>
            プライバシーポリシー
          </Typography>
          <Typography variant="body1" paragraph>
            株式会社レクト（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </Typography>
          <Policy />
        </Container>
      </Box>
    </main>
  );
};

export default Privacy;

import Heading2 from './components/Heading2'
import { Box,Typography } from '@mui/material';

const questionData = [
  {
    id: 'q1',
    question: '開発費用はどのくらいかかりますか？',
    answer:
      'ご依頼内容によって異なります。まずはヒアリングをさせていただき、最適なプランとお見積もりをご提案いたします。相談とお見積もりは無料ですので、お気軽にお問い合わせください。',
  },
  {
    id: 'q2',
    question: '開発の専門知識がないのですが、大丈夫でしょうか？',
    answer:
      'はい、ご安心ください。エンジニアがお客様の窓口となり、わかりやすい言葉で丁寧にご説明いたします。',
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        backgroundColor: '#EFF7FF'
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Heading2 subText="faq" mainText="よくある質問"/>
        <Box mt={5}>
          {questionData.map((item) => (
            <Box component="dl" key={item.id} sx={{
              borderBottom: 'solid 1px #969696',
              pb: 3,
              '& + &': {
                pt: 3,
              }
            }}>
              <Typography component="dt" sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                lineHeight: '1.7',
              }}>
                <Typography component="span" sx={{
                  mr: 1,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#00298A',
                }}>Q.</Typography>
                {item.question}
              </Typography>
              <Typography component="dd" sx={{
                mt: 2,
                fontSize: '14px',
                letterSpacing: '0.05em',
                lineHeight: '1.7',
              }}>
                <Typography component="span" sx={{
                  mr: 2,
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#00298A'
                }}>A.</Typography>
                {item.answer}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
export default Faq;
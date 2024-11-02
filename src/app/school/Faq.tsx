import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headingTeacherImg from "../../../public/image/school/heading_faq.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionData = [
  {
    id: 'panel1',
    question: '祝日はどうなりますか？',
    answer: '祝日の場合も授業を行います。都合が合わない場合は2週間後までの間で振替授業を行うことが可能です。',
  },
  {
    id: 'panel2',
    question: 'パソコン初心者でも大丈夫ですか？',
    answer: 'もちろん大丈夫です。講師が丁寧にフォローいたしますので、ご安心ください。学習に不安がないか確かめる上でも、ぜひ一度無料体験にご参加ください。',
  },
  {
    id: 'panel3',
    question: 'パソコンやタブレットを購入する必要はありますか？',
    answer: '教室にあるものを利用しますので、機材の購入は不要です。',
  },
];


const Faq = () => {
  return (
    <Box pt={6} pb={10} mx={3}>
      <Typography variant="h2">
        <img src={headingTeacherImg.src} alt="よくある質問" width="197" />
      </Typography>
      <Box mt={6}>
        {accordionData.map((item) => (
          <Accordion key={item.id} sx={{ border: "solid 2px #F0F0F0", boxShadow: "none", marginTop: 2,'&:before': {content: "none"}}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color: "#24285B"}} />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              <Typography sx={{ backgroundColor: "#24285B", color: "#fff", borderRadius: "50%", width: "24px", height: "24px", minWidth: "24px", minHeight: "24px", display: "flex", alignItems: "center", justifyContent: "center"}} mr={2}>Q</Typography>
              {item.question}
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "left" }}>
              {item.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;

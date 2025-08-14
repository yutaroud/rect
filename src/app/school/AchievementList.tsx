import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingCtaImg from '../../../public/image/school/heading_achievementList.png';

const sxStyles = {
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '134px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '134px',
      },
    },
  },
  photos: {
    display: 'flex',
    gap: 2,
    px: 2,
    marginTop: '40px',
    justifyContent: 'flex-start',
    overflow: 'scroll',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    maxWidth: '100%',
    width: 'max-content',
    mx: 'auto',
    overflowY: 'hidden',
  },
  list: {
    borderRadius: '8px',
    border: 'solid 1px #956A1D',
    overflow: 'hidden',
    minWidth: '300px',
    maxWidth: '300px',
    '@media screen and (max-width:450px)': {
      minWidth: '229px',
      maxWidth: '229px',
    },
    '& > img': {
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom',
    },
  },
  wrap: {
    marginTop: '12px',
    marginBlock: '16px',
    paddingInline: '12px',
    textAlign: 'left',
  },
  date: {
    fontSize: '14px',
  },
  grade: {
    fontSize: '14px',
    marginTop: '4px',
  },
  member: {
    fontSize: '14px',
    marginTop: '4px',
  },
};

const members = [
  {
    src: '../../../image/school/image_achievementList1.webp',
    date: '2025年5月',
    grade: 'ジュニアプログラミング検定 ブロンズ級',
    member: '御油小学校 5年生',
  },
  {
    src: '../../../image/school/image_achievementList2.webp',
    date: '2025年5月',
    grade: 'ジュニアプログラミング検定 エントリー級',
    member: '前芝小学校 6年生',
  },
];

const AchievementList = () => {
  return (
    <Box pt={5}>
      <Typography variant="h2" sx={sxStyles.heading}>
        <img src={headingCtaImg.src} alt="合格実績" width="266" height="61" />
      </Typography>
      <Box sx={sxStyles.photos}>
        {members.map((image, index) => (
          <Box sx={sxStyles.list} key={index}>
            <img src={image.src} alt="" width="300" height="200" />
            <Box sx={sxStyles.wrap}>
              <Typography variant="body2" sx={sxStyles.date}>
                {image.date}
              </Typography>
              <Typography variant="body2" sx={sxStyles.grade}>
                {image.grade}
              </Typography>
              <Typography variant="body2" sx={sxStyles.member}>
                {image.member}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AchievementList;

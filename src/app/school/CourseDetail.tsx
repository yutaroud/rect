import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CheckCircle } from "@mui/icons-material";
import headingDetailImg from "../../../public/image/school/heading_OtherCourses.png";
import Link from "next/link";
import { PlayCircle } from "@mui/icons-material";

interface CourseDetailProps {
  course: {
  id: number;
  name: {
    category: string;
    level: string;
  };
  thumbnail: string;
  summary: string;
  details: string;
  target: string;
  sessionCount: string;
  duration: string;
  price: string;
  schedule: {
    dayOfWeeks: string[];
    times: string[];
  };
}
}

const sxStyles = {
  heading1: {
    fontSize: '22px',
    backgroundImage: "repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)",
    pt: 5,
    pb: 3,
    color: '#24285B'
  },
  heading2: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#24285B',
    position: 'relative',
    display: 'inline-block',
    px: '1em',
    '&:before, &:after' : {
      position: 'absolute',
      content: "''",
      width: "4px",
      height: "100%",
      borderTop: "#24285B solid 1px",
      borderBottom: "#24285B solid 1px",
      top: 0,
    },
    '&:before' : {
      left: 0,
      borderLeft: '#24285B solid 1px',
    },
    '&:after' : {
      right: 0,
      borderRight: '#24285B solid 1px',
    }
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
  },
  detail: {
    fontSize: 14,
    textAlign: 'center',
  },
  item: {
    mt: 4,
    borderBottom: 'solid 1px #E0E0E0',
    pb: 4,
  },
  price: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  annotation: {
    fontSize: 12,
    textAlign: 'center',
  },
  dayOfWeek: {
    mt: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 3,
    py: 0,
  },
  dayOfWeekListOn: {
    fontSize: '14px',
    aspectRatio: 1,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    border: 'solid 1px #24285B',
    color: '#24285B',
    fontWeight: 'bold',
  }, 
  dayOfWeekListOff: {
    fontSize: '14px',
    aspectRatio: 1,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    border: 'solid 1px #9CA3AF',
    color: '#9CA3AF',
  },
  time: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '1.7'
  },
  itemContent: {
    mt: 3,
  },
  note: {
    p: 2,
    backgroundColor: '#EDF2FC',
    fontSize: '12px',
    gap: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#24285B',
    '& > svg': {
      width: '18px',
    },
  },
  otherCourses: {
    backgroundColor: '#F5F5F5',
    pt: 7,
    pb: 7,
    px: 3
  },
  list: {
    mt: 4,
  },
  listItem: {
    p: 0,
    '& + &' : {
      mt: 4,
    }
  },
  card: {
    px: 3,
    py: 5,
    borderTop: "solid 8px #24285B",
    backgroundColor: "#fff",
    width: "100%",
    height: "400",
    backgroundSize: 16,
    backgroundPosition: "50% 50%",
    backgroundImage: "repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: 24,
    color: '#24285B',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 14,
    mt: 4,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: '8px 40px 8px 50px',
    borderRadius: 66,
    backgroundColor: '#24285B',
    color: '#fff',
    boxShadow: 'none',
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
   }
}

const allDays = ["日", "月", "火", "水", "木", "金", "土"];

const Item = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Box sx={sxStyles.item}>
    <Typography variant="h2" sx={sxStyles.heading2}>
      {title}
    </Typography>
    <Box  sx={sxStyles.itemContent}>
      {children}
    </Box>
  </Box>
  )
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <>
      <Box sx={sxStyles.heading1}>
        <h1>{course.name.category}<br/>{course.name.level}</h1>
      </Box>
      <Box pb={10} mt={2} px={3}>
        <img src={`../../../image/school/${course.thumbnail}`} alt="講師" width="400" height="269" style={{marginTop: 32,width: '100%',height: 'auto'}}/>
        <Item title="授業内容">
          <Typography variant="body1" sx={sxStyles.description}>
          {course.summary}
          </Typography>
          <Typography variant="body1" sx={sxStyles.description}>
          {course.details}
          </Typography>
        </Item>
        <Item title="対象">
          <Typography variant="body1" sx={sxStyles.detail}>
          {course.target}
          </Typography>
        </Item>
        <Item title="受講回数">
          <Typography variant="body1" sx={sxStyles.detail}>
          {course.sessionCount}
          </Typography>
        </Item>
        <Item title="料金">
          <Typography variant="body1" sx={sxStyles.detail}>
            月額費用
          </Typography>
          <Typography variant="subtitle2" sx={sxStyles.price}>
          {course.price}
          </Typography>
          <Typography variant="body2" sx={sxStyles.detail}>
            受講料6,500円＋教材費500円
          </Typography>
          <Typography variant="body1" sx={sxStyles.detail} mt={2}>
            入会費
          </Typography>
          <Typography variant="subtitle2" sx={sxStyles.price}>
            10,000円
          </Typography>
          <Typography variant="body2" sx={sxStyles.annotation} mt={2}>
            ※システム料金が別途かかる場合がございます
          </Typography>
        </Item>
        <Item title="開催日程">
          <List sx={sxStyles.dayOfWeek}>
          {allDays.map((day, index) => (
          <ListItem
            key={index}
            sx={course.schedule.dayOfWeeks.includes(day) ? sxStyles.dayOfWeekListOn : sxStyles.dayOfWeekListOff}
          >
            {day}
          </ListItem>
        ))}
          </List>
          <Box mt={2}>
            {course.schedule.times.map((time, index) => (
              <Typography variant="body1" sx={sxStyles.time} key={index}>
              ・{time}
              </Typography>
            ))}
          </Box>
          <Typography sx={sxStyles.note} mt={2}><CheckCircle/>日程の調整可能です。お気軽にご相談ください。</Typography>
        </Item>
      </Box>
      <Box sx={sxStyles.otherCourses}>
        <Typography variant="h2">
          <img
            src={headingDetailImg.src}
            alt="他のコース"
            width="164"
          />
        </Typography>
        <List sx={sxStyles.list}>
          <ListItem  sx={sxStyles.listItem}>
          <Link
            href='/school/course1'>
              <Box sx={sxStyles.card}>
                <Typography sx={sxStyles.title}>
                  ソフトウェア開発<br/>中級
                </Typography>
                <Typography variant="body1" sx={sxStyles.text}>
                  マサチューセッツ工科大学で開発されたビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます
                </Typography>
                <Box
                  sx={sxStyles.button}
                >
                  詳細
                  <PlayCircle/>
                </Box>
            </Box>
          </Link>
        </ListItem>
      </List>
      </Box>
    </>
  );
};

export default CourseDetail;

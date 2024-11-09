import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headingDetailImg from "../../../public/image/school/heading_curriculum.png";
import Link from "next/link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { PlayCircle } from "@mui/icons-material";

const courseItem = [
  {
    name: {
      category: "Scratch",
      level: "初級",
    },
    thumbnail: "thumbnail_course_1.png",
    text: "マサチューセッツ工科大学で開発されたビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます",
   },
  {
    name: {
      category: "ソフトウェア開発",
      level: "中級",
    },
    thumbnail: "thumbnail_course_2.png",
    text: "実際の開発で使用されているテキストプログラミング言語「JavaScript」を用いて決められたテーマに沿ってWebサイト開発を行い、プログラミングを学びます。",
   },
]

const sxStyles = {
  wrap: {
    bgcolor: "#407BFF",
    py: 8,
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

const Curriculum = () => {
  return (
    <Box sx={sxStyles.wrap}>
      <Typography variant="h2">
        <img
          src={headingDetailImg.src}
          alt="スクール概要"
          width="177"
        />
      </Typography>
      <List sx={sxStyles.list}>
        {courseItem.map((course, id) => (
          <ListItem  sx={sxStyles.listItem}>
            <Link
              href={`/school/course${id}/`}>
                <Box sx={sxStyles.card}>
                  <Typography sx={sxStyles.title}>
                    {course.name.category}<br/>{course.name.level}
                  </Typography>
                  <img src={`../../../image/school/${course.thumbnail}`} alt="講師" width="400" height="269" style={{marginTop: 32,width: '100%',height: 'auto'}}/>
                  <Typography variant="body1" sx={sxStyles.text}>
                    {course.text}
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
          ))
        }
      </List>
    </Box>
  );
};

export default Curriculum;

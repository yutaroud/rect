import "../../globals.css";
import Box from "@mui/material/Box";
import CourseDetail from "../CourseDetail";
import Contact from "../Contact";
import { Courses } from "../../../lib/const/Courses";
import Typography from "@mui/material/Typography";

export async function generateStaticParams() {
  return Courses.map((course) => ({
    courseId: `course${course.id}`,
  }));
}
  
interface CoursePageProps {
  params: {
    courseId: string;
  };
}
  
const CoursePage: React.FC<CoursePageProps> = ({ params }: CoursePageProps) => {
  const course = Courses.find((course) => `course${course.id}` === params.courseId);

  if (!course) {
    return (
      <Box
        component="section"
        sx={{
          textAlign: "center",
          mx: "auto",
          border: "solid 1px #EEEEEE",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <Typography variant="body2" mt={2} align="center">
          コースが存在していません
        </Typography>
      </Box>
    );
  }

  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: "center",
          mx: "auto",
          border: "solid 1px #EEEEEE",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <CourseDetail course={course}/>
        <Contact />
      </Box>
    </main>
  );
}

export default CoursePage;
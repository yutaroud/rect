import "../../globals.css";
import Box from "@mui/material/Box";
import CourseDetail from "../CourseDetail";
import Contact from "../Contact";

export async function generateStaticParams() {
  return [
    { courseId: "course0" },
    { courseId: "course1" },
    { courseId: "course2" },
  ];
}
  
interface CoursePageProps {
  params: {
    courseId: string;
  };
}
  
const CoursePage: React.FC<CoursePageProps> = ({ params }: CoursePageProps) => {

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
        <CourseDetail/>
        <Contact />
      </Box>
    </main>
  );
}

export default CoursePage;
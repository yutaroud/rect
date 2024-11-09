import "../../globals.css";
import Container from "@mui/material/Container";

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
  const { courseId } = params;

  return (
    <main>
      <Container sx={{ mt: 8 }}>
        <h1>{courseId}のページだよ</h1>
      </Container>
    </main>
  );
}

export default CoursePage;
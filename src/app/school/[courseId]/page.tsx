import "../../globals.css";
import Container from "@mui/material/Container";
import Header from "../../Header";

export async function generateStaticParams() {
  return [
    { courseId: "course1" },
    { courseId: "course2" },
    { courseId: "course3" },
  ];
}
  
interface CoursePageProps {
  params: {
    courseId: string;
  };
}
  
export default function CoursePage({ params }: CoursePageProps) {
  const { courseId } = params;

  return (
    <main>
      <Header switchLogo={true} />
      <Container sx={{ mt: 8 }}>
        <h1>{courseId}のページだよ</h1>
      </Container>
    </main>
  );
}
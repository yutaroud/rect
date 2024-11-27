import "../../globals.css";
import Box from "@mui/material/Box";
import CourseDetail from "./CourseDetail";
import CourseOtherList from "./CourseOtherList";
import Contact from "../Contact";
import { Courses } from "../../../lib/const/Courses";
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from "../../BreadcrumbsNavigation";
import { schoolTopTitle } from "@/lib/const/BreadCrumbTitle";


export async function generateStaticParams() {
  return Courses.map((course) => ({
    courseSlug: `${course.slug}`,
  }));
}

interface CoursePageProps {
  params: {
    courseSlug: string;
  };
}

const CoursePage: React.FC<CoursePageProps> = ({ params }: CoursePageProps) => {
  const course = Courses.find((course) => `${course.slug}` === params.courseSlug);
  const unreleasedCourses = Courses.filter((course) => `${course.slug}` !== params.courseSlug);

  if (!course) {
    return notFound();
  }

  schoolTopTitle.push(`${course.name.category} ${course.name.level}コース`)

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
        <CourseOtherList unreleasedCourses={unreleasedCourses} />
        <Contact />
        <BreadcrumbsNavigation titles={schoolTopTitle}/>
      </Box>
    </main>
  );
}

export default CoursePage;

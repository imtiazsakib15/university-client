import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourses from "../pages/faculty/OfferedCourses";
import { TPath } from "../types";

export const facultyPaths: TPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <OfferedCourses />,
  },
];

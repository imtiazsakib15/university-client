import StudentDashboard from "../pages/student/StudentDashboard";
import { TPath } from "../types";

export const studentPaths: TPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
];

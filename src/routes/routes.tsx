import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./adminRoutes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },
]);

export default router;
